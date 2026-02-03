import * as Yup from "yup";

export const createStorySchema = Yup.object({
  title: Yup.string().required("Обовʼязкове поле"),
  category: Yup.string().required("Оберіть категорію"),
  text: Yup.string().required("Обовʼязкове поле"),
  image: Yup.mixed().required("Додайте зображення"),
});