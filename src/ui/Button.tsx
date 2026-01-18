import type { MouseEventHandler, ReactNode } from "react";

type TVariant = "primary" | "secondary";
type TSize = "small" | "big";

interface IProps {
  variant: TVariant;
  size: TSize;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}
const Button = ({
  variant,
  size,
  disabled = false,
  onClick,
  children,
}: IProps) => {
  const paddings =
    size === "big" ? "py-[10.5px] px-3 rounded-lg" : "py-1 px-2.5 rounded-md";
  const disabledStyles = disabled
    ? "opacity-30 cursor-not-allowed"
    : "cursor-pointer";
  const styles =
    variant === "primary"
      ? `text-gray-50 bg-blue-400 border-[1px] border-blue-400 
      dark:text-gray-900 dark:bg-gray-50 dark:border-[1px] dark:border-gray-50
       ${
         !disabled
           ? "hover:bg-blue-50 hover:text-gray-900 focus:text-gray-900 focus:bg-blue-50 active:bg-blue-700 dark:hover:bg-gray-400 dark:hover:text-gray-50 dark:focus:bg-gray-400 dark:focus:text-gray-50 dark:active:bg-gray-500 dark:active:text-gray-50 dark:active:border-gray-400"
           : ""
       }`
      : `text-gray-900 bg-gray-50/5 border-[1px] border-gray-50/15 
      dark:text-gray-50 dark:bg-gray-50/10 dark:border-none
       ${
         !disabled
           ? "hover:bg-blue-400 hover:text-gray-50 focus:bg-blue-400 focus:text-gray-50 active:bg-blue-900 active:text-gray-50 dark:hover:bg-blue-50 dark:hover:text-gray-900 dark:focus:bg-blue-50 dark:focus:text-gray-900 dark:active:text-gray-900 dark:active:bg-blue-700"
           : ""
       }
     `;

  return (
    <button
      className={`font-main font-medium text-lg ${paddings} ${styles} ${disabledStyles}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
