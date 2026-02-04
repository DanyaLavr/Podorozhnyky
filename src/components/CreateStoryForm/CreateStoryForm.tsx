import { createBem } from "@/utils/createBem";
import styles from "./_CreateStoryForm.module.scss";

import Button from "../ui/Button";

import { Formik, Form} from "formik";

import { ImageInput } from "./components/ImageInput";
import { TextInput } from "./components/TextInput";
import { CategorySelect } from "./components/CategorySelect";
import { Textarea } from "./components/Textarea";

import { createStorySchema } from "@/schemas/validationSchema";


const bem = createBem("createStories", styles);



interface FormValues {
  title: string;
  category: string;
  text: string;
  image: File | null;
}

export default function CreateStoryForm() {
  // const fileRef = useRef<HTMLInputElement | null>(null);

  const initialValues: FormValues = {
    title: "",
    category: "",
    text: "",
    image: null,
  };

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
