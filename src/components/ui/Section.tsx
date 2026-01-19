import type { ReactNode } from "react";

interface IProps {
  size: "big" | "small";
  children: ReactNode;
}
const Section = ({ size, children }: IProps) => {
  const paddingY =
    size === "big" ? "py-16 desktop:py-18" : " py-8 desktop:py-12";
  return (
    <section className={`${paddingY} px-5 mobile:px-0`}>{children}</section>
  );
};

export default Section;
