import { createBem } from "@/utils/createBem";
import styles from "./_CreateStoryForm.module.scss";

import Button from "../ui/Button";

import { Formik, Form} from "formik";

import { ImageInput } from "./components/ImageInput";
import { TextInput } from "./components/TextInput";
import { CategorySelect } from "./components/CategorySelect";
import { Textarea } from "./components/Textarea";

import { createStorySchema } from "@/schemas/validationSchema";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { storage, db } from "@/lib/firebase/app";


const bem = createBem("createStories", styles);



interface FormValues {
  title: string;
  category: string;
  text: string;
  image: File | null;
  id?: string;
  createdAt?: number;
  creator?: string;
  creatorUid?: string;
  description?: string;
  imageUrl?: string;
  story?: string;


}


export default function CreateStoryForm() {


  const initialValues: FormValues = {
    title: "",
    category: "",
    text: "",
    image: null,
  };

    const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    try {
      const { image, title, category, text } = values;
  
      if (!image) {
        alert("Додай картинку");
        return;
      }
  
      // 1️⃣ Upload картинки
      const imageRef = ref(
        storage,
        `${Date.now()}_${image.name}`
      );
  
      await uploadBytes(imageRef, image);
  
      // 2️⃣ URL
      const imageUrl = await getDownloadURL(imageRef);
  
      // 3️⃣ Запис у Firestore
      await addDoc(collection(db, "posts"), {
        title,
        category,
        text,
        imageUrl,
        createdAt: serverTimestamp(),


      });
  
      alert("Історія збережена ✅");
  
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Помилка при збереженні ❌");
    }
  };

  // const handleSubmitTest = (values: FormValues, { resetForm }: any) => {
    
  // }



  return (
    <div className={bem("")}>
      <Formik
        initialValues={initialValues}
        validationSchema={createStorySchema}
        onSubmit={(values, { resetForm }) => {
          console.log({
            ...values,
            image: values.image,
          });
          handleSubmit(values, { resetForm });
          resetForm();
        }}
      >
        {({ values }) => (
          <Form className={bem("form")}>
            <div className={bem("inputWrapper")}>
              {/* image */}
              <ImageInput/>


              {/* title */}
                <TextInput/>


              {/* // category */}
              <CategorySelect/>


              {/* text */}
              <Textarea/>
            </div>

            <div className={bem("buttonWrapper")}>
              <Button
                type="submit"
                className={bem("submitButton")}
                variant="primary"
              >
                Зберегти
              </Button>

              <Button
                type="reset"
                className={bem("submitButton")}
                variant="secondary"
              >
                Відмінити
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
