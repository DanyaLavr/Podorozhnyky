import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}
const Container = ({ className, children }: IProps) => {
  return (
    <div
      className={`m-auto mobile:w-[335px] tablet:w-176 desktop:w-328 border-2 border-red-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
