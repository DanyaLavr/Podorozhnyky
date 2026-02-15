import { createBem } from "@/utils/createBem";
import styles from "../_CreateStoryForm.module.scss";
import { Field, useFormikContext } from "formik";

const bem = createBem("createStories", styles);

export const Textarea = () => {
  const { errors, touched } = useFormikContext<{ description: string }>();

  const isError = touched.description && errors.description;
  return (
    <div className={bem("inputGroup")}>
      <label className={bem("label")}>Текст історії</label>
      <Field
        as="textarea"
        name="description"
        rows={6}
        className={`${bem("textarea")}` + ` ${isError ? bem("error") : ""}`}
        placeholder="Ваша історія тут"
      />

      {isError && <span className={bem("errorText")}>{errors.description}</span>}
    </div>

  );
};
