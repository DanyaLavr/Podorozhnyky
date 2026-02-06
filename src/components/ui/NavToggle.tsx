import { Link, useLocation } from "react-router-dom";

interface IProps {
  firstData: {
    content: string;
    link: string;
  };
  secondData: {
    content: string;
    link: string;
  };
}
const NavToggle = ({ firstData, secondData }: IProps) => {
  const { pathname } = useLocation();
  const isFirst = pathname === firstData.link;
  const linkStyles = "flex-1 text-center py-2 font-main z-10 desktop:text-lg ";
  return (
    <div className="flex bg-blue-50 relative p-1 rounded-[10px] ">
      <Link className={linkStyles} to={firstData.link}>
        {firstData.content}
      </Link>
      <Link className={linkStyles} to={secondData.link}>
        {secondData.content}
      </Link>
      <div
        className={`block w-[calc(50%-0.25rem)] bg-[#F7F9FF] top-1 bottom-1 absolute rounded-lg border border-gray-900/15
           transition-all ${isFirst ? "translate-x-0" : "translate-x-full"}`}
      ></div>
    </div>
  );
};

export default NavToggle;
