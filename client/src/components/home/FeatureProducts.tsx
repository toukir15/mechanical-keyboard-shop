import { Link } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/pages/Products";
import { Rating } from "@smastrom/react-rating";

export default function FeatureProducts() {
  const { data: productsData } = useGetProductsQuery(undefined);
  return (
    <section className=" mb-20 lg:mb-40 px-4">
      <h1 className="text-2xl lg:text-5xl font-medium lg:leading-[60px] text-white ">
        <span className="text-[#F85606]">Must-Have</span> Keyboards <br /> of
        the Season
      </h1>
      <div className="lg:mt-32 mt-6 gap-x-8 grid grid-cols-1 lg:grid-cols-6">
        {productsData?.data.slice(0, 6).map((product: TProduct) => {
          const { name, img, brand, rating, price, availableQuantity, _id } =
            product;
          return (
            <div className="w-full md:w-[240px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg text-gray-100">
              <div className="pt-3 px-3 mb-1 mx-auto min-h-[230px]">
                <img src={img} className="rounded-lg min-h-[230px]" alt="" />
              </div>
              <p className="font-medium px-5 md:px-4 mt-2 md:mt-0 ">
                {name.substring(0, 20)} {name.length > 20 && <span>...</span>}
              </p>
              <div className="px-5 text-gray-300">
                <div>
                  <span> Brand:</span> <span> {brand}</span>
                </div>
                <div>
                  <span>Price:</span> <span> ${price}</span>
                </div>

                <div className="flex items-center">
                  <p>Rating: </p>
                  <Rating
                    value={rating}
                    style={{ maxWidth: 100 }}
                    readOnly={true}
                  />
                </div>
                <div className="text-gray-300 flex justify-between p">
                  <p>Available Quantity: {availableQuantity}</p>
                </div>
              </div>
              <div className="flex justify-center pb-3 ">
                <Link
                  to={`/product-details/${_id}`}
                  className="flex items-center gap-2 bg-[#2F1B11] border border-orange-600 text-orange-600 hover:border-orange-700 hover:text-orange-700 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2  font-medium"
                >
                  <button>See Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-center mt-6 lg:mt-16">
        <Link
          to={"/products"}
          className="bg-orange-600 hover:bg-orange-700 transition duration-150 text-blacks px-32 font-medium text-lg md:py-3 py-2 rounded "
        >
          See More
        </Link>
      </div>
    </section>
  );
}
