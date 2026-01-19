import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const H2 = ({ children }: IProps) => {
  return (
    <h2 className="font-heading text-gray-900 font-bold text-[28px] tablet:text-[44px] desktop:text-[52px]">
      {children}
    </h2>
  );
};

export default H2;
