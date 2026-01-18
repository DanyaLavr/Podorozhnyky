import type { ReactNode } from "react";
import SaveIcon from "./save.svg";
type TType = "text" | "icon";
interface IProps {
  type?: TType;
  link: string;
  disabled?: boolean;
  children?: ReactNode;
}
const Link = ({ type = "text", link, disabled = false, children }: IProps) => {
  const paddings = type === "text" ? `px-2 ` : `p-0.5 inline-block`;
  return (
    <a
      href={disabled ? undefined : link}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      className={`
    ${paddings}
    font-main font-medium text-lg rounded-lg
    ${
      disabled
        ? "opacity-30 cursor-not-allowed!"
        : "cursor-pointer hover:border-gray-900 focus:border focus:border-gray-900 active:border active:border-gray-900 active:bg-gray-350 dark:hover:border-gray-50  dark:focus:border-gray-50  dark:active:border-gray-50 dark:active:bg-gray-500"
    }
  `}
    >
      {type === "text" ? children : <SaveIcon />}
    </a>
  );
};

export default Link;
