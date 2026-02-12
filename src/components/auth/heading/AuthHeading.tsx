import H2 from "@/components/ui/H2";

interface IProps {
  title: string;
  description: string;
}
const AuthHeading = ({ title, description }: IProps) => {
  return (
    <div className="text-center mt-8">
      <H2>{title}</H2>
      <p className="font-main text-md mt-6 desktop:text-xl">{description}</p>
    </div>
  );
};

export default AuthHeading;
