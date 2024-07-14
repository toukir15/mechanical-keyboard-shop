import React, { useState } from "react";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { IoClose } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import "./Products.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import ProductsLoading from "@/components/loading/ProductsLoading";

export type TProduct = {
  _id: string;
  name: string;
  availableQuantity: number;
  brand: string;
  createdAt: string;
  description: string;
  img: string;
  isDeleted: boolean;
  price: number;
  rating: number;
  updatedAt: string;
};

export default function Products() {
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sortPlaceholder, setSortPlaceholder] = useState("Sort");
  const [filterPlaceholder, setFilterPlaceholder] = useState("Filter");

  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetProductsQuery(undefined);

  const handleFilter = (filterValue: string) => {
    setFilter(filterValue);
    setFilterPlaceholder(filterValue);
  };

  const handleSort = (sortValue: string) => {
    setSort(sortValue);
    setSortPlaceholder(sortValue === "low" ? "Low to High" : "High to Low");
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClear = () => {
    setFilter("");
    setSort("");
    setSearch("");
    setSortPlaceholder("Sort");
    setFilterPlaceholder("Filter");
  };

  const applyFilterSortSearch = (products: TProduct[]) => {
    let filtered = [...products];

    // Apply search
    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.brand.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply filter
    switch (filter) {
      case "filter100":
        filtered = filtered.filter(
          (product) => product.price >= 0 && product.price <= 100
        );
        break;
      case "filter200":
        filtered = filtered.filter(
          (product) => product.price > 101 && product.price <= 200
        );
        break;
      case "filter300":
        filtered = filtered.filter(
          (product) => product.price > 201 && product.price <= 300
        );
        break;
      case "filter400":
        filtered = filtered.filter(
          (product) => product.price > 301 && product.price <= 400
        );
        break;
      case "filter500":
        filtered = filtered.filter(
          (product) => product.price > 401 && product.price <= 500
        );
        break;
      case "upTo500":
        filtered = filtered.filter((product) => product.price > 500);
        break;
      default:
        break;
    }

    // Apply sort
    switch (sort) {
      case "low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return filtered;
  };

  const filteredProducts = applyFilterSortSearch(productsData?.data || []);

  if (isLoading) {
    return <ProductsLoading />;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <section className="lg:mb-40 mb-12 min-h-[calc(100vh-150px)] lg:min-h-[calc(100vh-260px)] container mx-auto px-4 lg:px-0 ">
      <div className="flex justify-end mt-8 lg:mt-16 lg:px-12">
        <div className="flex text-white gap-2 lg:gap-4">
          <div className="w-full">
            <div className="w-full border-[#e36a37] border relative flex rounded items-center">
              <Input
                className="bg-[#121212] border-0 border-[#e36a37] text-white outline-0 focus:outline-none"
                type="text"
                placeholder="Search by name, brand."
                value={search}
                onChange={handleSearch}
                style={{
                  boxShadow: "none",
                  outline: "none",
                }}
              />
              <div className="bg-orange-600 p-1 text-xl mr-1 rounded ">
                <AiOutlineSearch />
              </div>
            </div>
          </div>

          <Select onValueChange={handleSort} value={sort}>
            <SelectTrigger style={{ color: "black" }} className="w-[120px]">
              <SelectValue placeholder={sortPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low to High</SelectItem>
              <SelectItem value="high">High to Low</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={handleFilter} value={filter}>
            <SelectTrigger style={{ color: "black" }} className="w-[120px]">
              <SelectValue placeholder={filterPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="filter100">$0 To $100</SelectItem>
              <SelectItem value="filter200">$101 To $200</SelectItem>
              <SelectItem value="filter300">$201 To $300</SelectItem>
              <SelectItem value="filter400">$301 To $400</SelectItem>
              <SelectItem value="filter500">$401 To $500</SelectItem>
              <SelectItem value="upTo500">$Up To 500</SelectItem>
            </SelectContent>
          </Select>

          {(sort || filter || search) && (
            <button
              className="bg-orange-600 hover:bg-orange-700 transition duration-150 text-black px-4 rounded-md flex gap-1 items-center"
              onClick={handleClear}
            >
              <p className="hidden lg:block">Clear</p>
              <IoClose className="relative top-[1px]" />
            </button>
          )}
        </div>
      </div>
      <div className="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-5 gap-y-4 lg:gap-y-16 gap-4">
        {filteredProducts.map((product) => {
          const { name, brand, img, rating, price, availableQuantity, _id } =
            product;
          return (
            <div
              key={_id}
              className="w-full lg:w-[280px] bg-[#1c1c1edc] border border-gray-500 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div className="pt-3 px-3 mx-auto">
                <img
                  src={img}
                  className="rounded-lg h-[253px] bg-contain"
                  alt={name}
                />
              </div>
              <p className="text-center mt-3 font-medium text-gray-100 mb-1 px-1 lg:px-0">
                {name.substring(0, 25)} {name.length > 25 && <span>...</span>}
              </p>
              <div className="text-gray-200 flex justify-between py-1 px-4">
                <p className="bg-[#2F1B11] px-3 text-orange-600 rounded text-sm py-1">
                  {brand}
                </p>
                <p>
                  <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                </p>
              </div>
              <p className="text-gray-200 px-4 rounded mt-1 py-1">
                Price: ${price}
              </p>
              <div className="text-gray-200 flex justify-between py-1 px-4">
                <p>Available Quantity: {availableQuantity}</p>
              </div>
              <div className="flex-grow"></div>{" "}
              {/* This line ensures the button stays at the bottom */}
              <div className="flex justify-center pb-6">
                <Link
                  to={`/product-details/${_id}`}
                  className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 transition duration-150 w-full mx-4 justify-center py-1.5 rounded mt-2 font-medium"
                >
                  <button>See Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {!filteredProducts.length && (
        <div className="flex justify-center mt-16 font-medium text-2xl text-[#D5D5D5]">
          Products aren't available!
        </div>
      )}
    </section>
  );
}
