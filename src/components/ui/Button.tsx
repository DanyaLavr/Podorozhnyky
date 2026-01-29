import type { MouseEventHandler, ReactNode } from "react";

type TVariant = "primary" | "secondary";
type TType = "button" | "submit" | "reset";
interface IProps {
  variant?: TVariant;
  disabled?: boolean;
  isActive?: boolean;
  className?: string;
  type?: TType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}
const Button = ({
  variant,
  disabled = false,
  isActive = false,
  className,
  type = "button",
  onClick,
  children,
}: IProps) => {
  const disabledStyles = disabled
    ? "opacity-30 cursor-not-allowed"
    : "cursor-pointer";
  const styles =
    variant === "primary"
      ? ` border border-blue-400 dark:border-gray-50 
      ${
        isActive
          ? "text-gray-900 bg-blue-700 dark:active:text-gray-50 dark:bg-gray-500 dark:border-gray-400"
          : "text-gray-50 bg-blue-400 dark:text-gray-900 dark:bg-gray-50"
      } 
       ${
         !disabled
           ? `hover:bg-blue-50 hover:text-gray-900
            focus:text-gray-900 focus:bg-blue-50
            dark:hover:bg-gray-400 dark:hover:text-gray-50
             dark:focus:bg-gray-400 dark:focus:text-gray-50`
           : ""
       }`
      : `
       border border-gray-900/15 
      ${
        isActive
          ? "bg-blue-900 text-gray-50 dark:text-gray-900 dark:bg-blue-700"
          : "text-gray-900 bg-gray-900/5 dark:text-gray-50 dark:bg-gray-50/10 dark:border-none"
      }
       ${
         !disabled
           ? `hover:bg-blue-400 hover:text-gray-50
            focus:bg-blue-400 focus:text-gray-50
             
            dark:hover:bg-blue-50 dark:hover:text-gray-900
            dark:focus:bg-blue-50 dark:focus:text-gray-900
            `
           : ""
       }
     `;

  return (
    <button
      className={`font-main font-medium text-lg rounded-lg  ${styles} ${disabledStyles} ${className}`}
      disabled={disabled}
      type={type}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </button>
  );
};

export default Button;
