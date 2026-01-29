import { createBem } from "@/utils/createBem";
import styles from "./_CreateStory.module.scss";
import H1 from "@/components/ui/H1.tsx";
import Button from "../ui/Button";
import { useState, useRef } from "react";



const bem = createBem("createStories", styles);



export default function CreateStory() {
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);


  const handleButtonClick = () => {
    fileRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form as HTMLFormElement);

    const result = {
      title: data.get("title"),
      category: data.get("category"),
      text: data.get("text"),
      // image: fileRef.current?.files?.[0] || null,
      image: image || null,
    };

    console.log(result);
  };

  return (
    <div className="container">
      <div className={bem("")}>
        <H1 position="left" className={bem("title")}>
          Створити нову історію
        </H1>

        <div>
          <form onSubmit={handleSubmit} className={bem("form")}>
            <div className={bem("inputWrapper")}>
              <div className={bem("inputGroup")}>
                <label className={bem("label")}>Обкладинка статті</label>

                <label className={bem("imageInput")}>
                  <img
                    className={bem("imagePreview")}
                    src={
                      image ||
                      "../../../../public/images/CreateStory/placeholderImage.png"
                    }
                    alt="Обкладинка статті"
                  />
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />

                  <button
                    type="button"
                    onClick={handleButtonClick}
                    className={bem("button")}
                  >
                    Завантажити фото
                  </button>
                </label>
              </div>

              <div className={bem("inputGroup")}>
                <label className={bem("label")}>Заголовок</label>
                <input
                  className={bem("input")}
                  name="title"
                  type="text"
                  placeholder="Введіть заголовок історії"
                />
              </div>

              <div className={bem("inputGroup")}>
                <label className={bem("label")}>Категорія</label>
                <input
                  className={bem("input")}
                  name="category"
                  type="text"
                  placeholder="Категорія"
                />
              </div>

              <div className={bem("inputGroup")}>
                <label className={bem("label")}>Текст історії</label>
                <textarea
                  name="text"
                  rows={6}
                  className={bem("textarea")}
                  placeholder="Ваша історія тут"
                ></textarea>
              </div>
            </div>

            <div className={bem("buttonWrapper")}>
              <Button type="submit" className={bem("submitButton")} variant="primary">
                Зберегти
              </Button>

              <Button className={bem("submitButton")} variant="secondary">
                Відмінити
              </Button>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}
