import { SyncLoader } from "react-spinners";
interface IProps {
  color?: string;
  cssOverride?: {
    x: string;
  };
  loading: boolean;
}
const Loader = ({ color = "#000", cssOverride, loading }: IProps) => {
  return (
    <SyncLoader
      color={color}
      cssOverride={{
        display: "flex",
        margin: "0 auto",
        ...cssOverride,
      }}
      loading={loading}
    />
  );
};

export default Loader;
