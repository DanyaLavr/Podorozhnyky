import type { ReactNode } from "react";

interface IProps {
  variant: "light" | "dark";
  children: ReactNode;
}

const H1 = ({ variant = "light", children }: IProps) => {
  const color = variant === "light" ? "text-gray-50" : "text-gray-900";
  return (
    <h1
      className={`${color} text-[32px] font-bold font-heading tablet:text-[44px] desktop:text-[56px]`}
    >
      {children}
    </h1>
  );
};

export default H1;
