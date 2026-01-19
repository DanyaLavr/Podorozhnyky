import type { ReactNode } from "react";

interface IProps {
  variant?: "light" | "dark";
  position?: "center" | "left";
  children: ReactNode;
}

const H1 = ({ variant = "light", position = "center", children }: IProps) => {
  const color = variant === "light" ? "text-gray-50" : "text-gray-900";
  const postion = position === "center" ? "text-center" : "";
  return (
    <h1
      className={`${color} ${postion} text-[32px] font-bold font-heading tablet:text-[44px] desktop:text-[56px]`}
    >
      {children}
    </h1>
  );
};

export default H1;
