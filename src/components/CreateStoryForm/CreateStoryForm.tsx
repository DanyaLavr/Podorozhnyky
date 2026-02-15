import { createBem } from "@/utils/createBem";
import styles from "./_CreateStoryForm.module.scss";

import { useState } from "react";
import Button from "../ui/Button";

import { Formik, Form } from "formik";

import { ImageInput } from "./components/ImageInput";
import { TextInput } from "./components/TextInput";
import { CategorySelect } from "./components/CategorySelect";
import { Textarea } from "./components/Textarea";
import Loader from "../ui/Loader";
import { createStorySchema } from "@/lib/schemas/validationSchema";
import { selectUser } from "@/redux/auth/selectors";
import { useSelector } from "react-redux";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { storage, db } from "@/lib/firebase/app";



const bem = createBem("createStories", styles);

interface FormValues {
  // category?: string;
  // text: string;
  // image: File | null;

  createdAt?: number;
  creatorId?: string;
  creatorImage?: string;
  creatorName?: string;
  description?: string;
  locationImage?: File | null;
  readTime?: number;
  category?: string;
  title: string;
}

export default function CreateStoryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser);
  console.log(user);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues: FormValues = {
    title: "",
    category: "",
    description: "",
    locationImage: null,
  };

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    try {
      const { locationImage, title, category, description } = values;

      setIsLoading(true);

      if (!locationImage) {
        alert("Додай картинку");

        return;
      }

      // 1️⃣ Upload картинки
      const imageRef = ref(storage, `${Date.now()}_${locationImage.name}`);

      await uploadBytes(imageRef, locationImage);

      // 2️⃣ URL
      const imageUrl = await getDownloadURL(imageRef);

      // 3️⃣ Запис у Firestore
      await addDoc(collection(db, "posts"), {
        // title,
        // region,

        // imageUrl,
        // createdAt: serverTimestamp(),
        // creator: user?.displayName || "unknown",
        // creatorId: user?.uid || "unknown",
        // description,

        creatorId: user?.uid || "unknown",
        creatorImage: "unknown",
        creatorName: user?.displayName || "unknown",
        description,
        createdAt: Date.now(),

        locationImage: imageUrl,
        readTime: 5,
        category,
        title,
      });

      setSuccessMessage("Історія успішно збережена 🎉");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      setIsLoading(false);
      resetForm();
    } catch (err) {

      setErrorMessage("Помилка при збереженні ❌");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={bem("")}>
      {successMessage && (
        <div className={bem("successMessage")}>{successMessage}</div>
      )}

      {errorMessage && (
        <div className={bem("errorMessage")}>{errorMessage}</div>
      )}

      <Loader loading={isLoading} />

      <Formik
        initialValues={initialValues}
        validationSchema={createStorySchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, { resetForm });
          // resetForm();
        }}
      >
        {(formik) => {
          console.log("errors:", formik.errors);
          return (
            <Form className={bem("form")}>
              <div className={bem("inputWrapper")}>
                {/* image */}
                <ImageInput />

                {/* title */}
                <TextInput />

                {/* // category */}
                <CategorySelect />

                {/* text */}
                <Textarea />
              </div>

              <div className={bem("buttonWrapper")}>
                <Button disabled={isLoading}
                  type="submit"
                  className={bem("submitButton")}
                  variant="primary"
                >
                  Зберегти
                </Button>

                <Button disabled={isLoading}
                  type="reset"
                  className={bem("submitButton")}
                  variant="secondary"
                >
                  Відмінити
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
