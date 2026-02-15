import { useState } from "react";
import style from "./_InfoModal.module.scss";
import { createBem } from "@/utils/createBem";

interface TInfoModalProps {
  title: string;
  text: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const bem = createBem("info_modal", style);

const InfoModal = ({
  title,
  text,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel
}: TInfoModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel =
    onCancel === null ? () => setIsModalOpen(false) : () => onCancel;
  const closeModal = () => {
    setIsModalOpen(false);
  };
  if (!isModalOpen) return null;

  return (
    <section className={bem()} data-aos="fade-up">
      <div className={bem("content")}>
        <img
          className={bem("cross")}
          src="../../../public/icons/close.svg"
          alt="cross"
          onClick={closeModal}
        />
        <h2 className={bem("title")}>{title}</h2>
        <p className={bem("desc")}>{text}</p>
        <div className={bem("btn")}>
          <button onClick={() => handleCancel} className={bem("cancel")}>
            {confirmButtonText}
          </button>
          <button onClick={onConfirm} className={bem("exit")}>
            {cancelButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoModal;
