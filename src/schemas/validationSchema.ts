import * as Yup from "yup";

export const createStorySchema = Yup.object({
  title: Yup.string().required("Обовʼязкове поле"),
  region: Yup.string().required("Оберіть категорію"),
  description: Yup.string().required("Обовʼязкове поле"),
  locationImage: Yup.mixed().required("Додайте зображення"),
});