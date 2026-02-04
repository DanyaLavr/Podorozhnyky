import { Link } from "react-router-dom";
import Button from "./Button";

interface IProps {
  text: string;
  buttonContent: string;
  buttonLink: string;
}
const StoriesMessage = ({ text, buttonContent, buttonLink }: IProps) => {
  return (
    <div className=" bg-blue-50 p-5 rounded-3xl mt-10 tablet:w-133.25 tablet:px-8 tablet:py-10">
      <h3 className="font-heading font-bold text-lg desktop:text-[26px]">
        {text}
      </h3>
      <Link to={buttonLink}>
        <Button
          className="mt-8 py-3 w-full tablet:w-auto px-3"
          variant="primary"
        >
          {buttonContent}
        </Button>
      </Link>
    </div>
  );
};

export default StoriesMessage;
