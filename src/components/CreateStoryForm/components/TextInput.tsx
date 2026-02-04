import { createBem } from "@/utils/createBem";
import styles from "../_CreateStoryForm.module.scss";
import { Field, useFormikContext } from "formik";

const bem = createBem("createStories", styles);

export const TextInput = () => {
  const { errors, touched } = useFormikContext<{title: string}>();

  const isError = errors.title && touched.title
  return (
    <div className={bem("inputGroup")}>
      <div className={`${bem("inputGroup")} "inputGroup--fullWidth"`}>
        <label className={bem("label")}>Заголовок</label>
        <Field
          className={`${bem("input")}` + ` ${isError ? bem("error") : ""}`}
          name="title"
          type="text"
          placeholder="Введіть заголовок історії"
        />
        {isError && <span className={bem("errorText")}>{errors.title}</span>}
      </div>
    </div>
  );
};
