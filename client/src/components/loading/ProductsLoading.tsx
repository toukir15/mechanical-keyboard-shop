import { Skeleton } from "../ui/skeleton";

const loadingArray = new Array(10).fill(0);

export default function ProductsLoading() {
  return (
    <div className="mt-6 container mx-auto min-h-[calc(100vh-100px)] ">
      <div className=" lg:mt-10 grid grid-cols-1 lg:grid-cols-5 gap-y-4 lg:gap-y-16 gap-4 pt-28">
        {loadingArray.map((_, i) => {
          return (
            <div
              key={i}
              className="flex flex-col space-y-3 w-full lg:w-[280px]"
            >
              <Skeleton className="bg-[#D5D5D5] h-[253px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="bg-[#D5D5D5] h-4 mt-1 " />
                <div className="flex justify-between">
                  <Skeleton className="bg-[#D5D5D5] h-4 mt-1 w-[60px]" />
                  <Skeleton className="bg-[#D5D5D5] h-4 mt-1 w-[120px]" />
                </div>
                <Skeleton className="bg-[#D5D5D5] h-4 mt-1 w-[90px]" />
                <Skeleton className="bg-[#D5D5D5] h-4 mt-1 w-[130px]" />
                <div className="mt-10">
                  <Skeleton className="bg-[#D5D5D5] h-8" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
