import { createBem } from "@/utils/createBem";
import styles from "../_CreateStoryForm.module.scss";
import { Field, useFormikContext } from "formik";

const bem = createBem("createStories", styles);

export const Textarea = () => {
  const { errors, touched } = useFormikContext<{ text: string }>();

  const isError = touched.text && errors.text;
  return (
    <div className={bem("inputGroup")}>
      <label className={bem("label")}>Текст історії</label>
      <Field
        as="textarea"
        name="text"
        rows={6}
        className={`${bem("textarea")}` + ` ${isError ? bem("error") : ""}`}
        placeholder="Ваша історія тут"
      />

      {isError && <span className={bem("errorText")}>{errors.text}</span>}
    </div>

  );
};
