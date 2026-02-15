import { createBem } from "@/utils/createBem";
import styles from "../_CreateStoryForm.module.scss";
import { useEffect, useMemo, useRef } from "react";
import { useFormikContext } from "formik";


const bem = createBem("createStories", styles);

export const ImageInput = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const {
    setFieldValue,
    setFieldTouched,
    setFieldError,
    errors,
    touched,
    values,
  } =
    useFormikContext<{
      locationImage: File | null;
    }>();

  const imageError = touched.locationImage ? errors.locationImage : undefined;
  const isError = Boolean(imageError);
  const previewUrl = useMemo(() => {
    if (!values.locationImage) {
      return "/images/CreateStory/placeholderImage.png";
    }

    return URL.createObjectURL(values.locationImage);
  }, [values.locationImage]);

  useEffect(() => {
    return () => {
      if (previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className={bem("inputGroup")}>
      <label className={bem("label")}>Обкладинка статті</label>

      <label className={bem("imageInput")}>
        <img
          className={bem("imagePreview")}
          src={previewUrl}
          alt="Обкладинка статті"
        />

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {
            const file = e.currentTarget.files?.[0] ?? null;

            setFieldValue("locationImage", file, true);
            setFieldTouched("locationImage", true, false);

            if (file) {
              setFieldError("locationImage", undefined);
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
        {isError && (
          <span style={{ marginLeft: "15px" }} className={bem("errorText")}>
            {String(imageError)}
          </span>
        )}
      </label>
    </div>
  );
};
