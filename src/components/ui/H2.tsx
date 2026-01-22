import type { ReactNode } from "react";
//* section's container
interface IProps {
  position?: "center" | "left";
  children: ReactNode;
}
const H2 = ({ position = "left", children }: IProps) => {
  const postion = position === "center" ? "text-center" : "";

  return (
    <h2
      className={`${postion} font-heading text-gray-900 font-bold text-[28px] tablet:text-[44px] desktop:text-[52px]`}
    >
      {children}
    </h2>
  );
};

export default H2;
