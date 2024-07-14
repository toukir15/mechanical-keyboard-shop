import PuffLoader from "react-spinners/PuffLoader";

export default function TransparentLoading() {
  return (
    <div className="text-white fixed top-0 right-0 left-0 bottom-0 bg-[#4f4c4c9f] flex justify-center items-center">
      <PuffLoader color="#EA580C" size={100} />
    </div>
  );
}
