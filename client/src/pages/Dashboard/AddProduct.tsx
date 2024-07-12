import { Input } from "@/components/ui/input";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [addProduct, { isLoading, isSuccess, isError, error }] =
    useAddProductMutation();
  const [addImage, setAddImage] = useState({});
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = (r) => {
      setAddImage({
        placeholder: r.target?.result,
        file: e.target.files[0],
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // const project = (data) => {
  //   addProduct(data);
  // };

  const project = async (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (addImage.file) {
      formData.append("file", addImage.file);
    }
    await addProduct(formData);
    navigate("/dashboard/product-list");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(project)}
        method="post"
        className="flex md:w-[50%] mx-auto px-4 flex-col text-white my-20"
      >
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Product Name
          </label>
          <Input
            {...register("productName", { required: true })}
            className="bg-[#D1D5DB]  w-[70%] text-black "
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Brand
          </label>
          <Input
            {...register("brand", { required: true })}
            className="bg-[#D1D5DB]  w-[70%] text-black "
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Price
          </label>
          <Input
            {...register("price", { required: true })}
            className="bg-[#D1D5DB]  w-[70%] text-black "
            type="number"
            placeholder="Price"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Rating
          </label>
          <Input
            {...register("rating", { required: true })}
            className="bg-[#D1D5DB]  w-[70%] text-black "
            type="number"
            placeholder="Price"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Description
          </label>
          <Input
            {...register("description", { required: true })}
            className="bg-[#D1D5DB]  w-[70%] text-black "
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1" htmlFor="addImage">
            Add Image
          </label>
          <input
            onChange={(e) => handleAddImageChange(e)}
            type="file"
            id="addImage"
            className="hidden"
          />
          <label
            htmlFor="addImage"
            className="py-2 px-5 rounded-full  text-sm bg-primary cursor-pointer w-fit border border-orange-600 hover:border-orange-700 text-orange-600 hover:text-orange-700 transition duration-150"
          >
            Upload File
          </label>
          {addImage.placeholder && (
            <div className="border p-2 ml-2">
              <img className="h-[40px]" src={addImage.placeholder} alt="" />
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Available Quantity
          </label>
          <Input
            {...register("availableQuantity", { required: true })}
            className="bg-[#D1D5DB]  w-[70%] text-black "
            type="text"
            placeholder="Available quantity"
          />
        </div>

        <div className="flex flex-col md:flex-row w-full md:items-center ">
          <div className="md:w-[30%] mb-1"></div>
          <div className="md:w-[70%] flex gap-6 ">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-1/2 ${
                isLoading
                  ? "bg-orange-100"
                  : "bg-orange-500 hover:bg-orange-600"
              }  transition duration-150 text-black font-medium py-3 px-4  rounded-lg`}
            >
              Add Project
            </button>
            <button className="w-1/2 border border-orange-600 hover:border-orange-700 text-orange-600 hover:text-orange-700 py-3 px-4 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
