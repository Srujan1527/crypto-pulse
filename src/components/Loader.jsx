// ButtonLoader.jsx
import ClipLoader from "react-spinners/ClipLoader";

const ButtonLoader = ({ loading }) => {
  return (
    <div className="flex justify-center items-center">
      <ClipLoader color="#000000" loading={loading} size={20} />
    </div>
  );
};

export default ButtonLoader;
