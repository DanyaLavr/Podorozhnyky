import { createBem } from "@/utils/createBem";
import styles from "../_CreateStoryForm.module.scss";
import SelectItem from "@/components/ui/SelectItem";

import { useFormikContext } from "formik";

const bem = createBem("createStories", styles);

const categoryOptions = [
  { value: "europe", label: "Європа" },
  { value: "asia", label: "Азія" },
  { value: "deserts", label: "Пустелі" },
  { value: "africa", label: "Африка" },

];

export const CategorySelect = () => {

    const { errors, touched } = useFormikContext<{ text: string }>();
  
    const isError = touched.text && errors.text;
  return (
    <div className={bem("inputGroup")}>
      <label className={bem("label")}>Категорія</label>
      
      <SelectItem placeholder="Категорія" options={categoryOptions} />
      {isError && <span className={bem("errorText")}>{errors.text}</span>}

    </div>
  );
};
