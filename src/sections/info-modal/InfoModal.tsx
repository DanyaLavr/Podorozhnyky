import style from "./_InfoModal.module.scss";
import { createBem } from "@/utils/createBem";

interface TInfoModalProps {
  isOpen: boolean;
  title: string;
  text: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const bem = createBem("info_modal", style);

const InfoModal = ({
  isOpen,
  title,
  text,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
}: TInfoModalProps) => {
  if (!isOpen) return null;

  return (
    <section className={bem()} data-aos="fade-up">
      <div className={bem("content")}>
        <img
          className={bem("cross")}
          src="/icons/Close.svg"
          alt="cross"
          onClick={onCancel}
        />
        <h2 className={bem("title")}>{title}</h2>
        <p className={bem("desc")}>{text}</p>
        <div className={bem("btn")}>
          <button type="button" onClick={onCancel} className={bem("cancel")}>
            {confirmButtonText}
          </button>
          <button type="button" onClick={onConfirm} className={bem("exit")}>
            {cancelButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoModal;
