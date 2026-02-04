import type { ReactNode } from "react";
//* section's container
interface IProps {
  variant?: "light" | "dark";
  position?: "center" | "left";
  className?: string;
  children: ReactNode;
}
const H2 = ({
  position = "left",
  variant = "dark",
  className,
  children,
}: IProps) => {
  const color = variant === "light" ? "text-gray-50" : "text-gray-900";
  const postion = position === "center" ? "text-center" : "";

  return (
    <h2
      className={`${postion} font-heading ${color} font-bold text-[28px] tablet:text-[44px] desktop:text-[52px] ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;
