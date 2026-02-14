import { createBem } from "@/utils/createBem";
import styles from "../_CreateStoryForm.module.scss";
import { useRef } from "react";
import { useFormikContext } from "formik";


const bem = createBem("createStories", styles);

export const ImageInput = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext<{
      locationImage: File | null;
    }>();

  const isError = touched.locationImage && errors.locationImage;

  return (
    <div className={bem("inputGroup")}>
      <label className={bem("label")}>Обкладинка статті</label>

      <label className={bem("imageInput")}>
        <img
          className={bem("imagePreview")}
          src={
            values.locationImage
              ? URL.createObjectURL(values.locationImage)
              : "/images/CreateStory/placeholderImage.png"
          }
          alt="Обкладинка статті"
        />

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {
            const file = e.currentTarget.files?.[0];
            if (file) {
              setFieldValue("locationImage", file);
              setFieldTouched("locationImage", true);

            }
          }}
        />

        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className={`${bem("button")}` + ` ${isError ? bem("error") : ""}`}
        >
          Завантажити фото
        </button>
        {isError && <span style={{ marginLeft: '15px'}} className={bem("errorText")}>Оберіть фото</span>}
      </label>
    </div>
  );
};
