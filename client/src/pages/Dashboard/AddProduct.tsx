/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface AddImageState {
  placeholder?: string;
  file?: File | null;
}

export default function AddProduct() {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const [addImage, setAddImage] = useState<AddImageState>({});
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const handleAddImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string; // Asserting reader.result as string
        setAddImage({
          placeholder: result,
          file: file,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const project = async (data: any) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (addImage.file!) {
      formData.append("file", addImage.file);
    }
    await addProduct(formData);
    navigate("/dashboard/product-list");
  };

  return (
    <div className="min-h-[calc(100vh-110px)] pt-10 pb-20 lg:pb-0 lg:pt-0 w-full flex lg:justify-center items-center container mx-auto">
      <form
        onSubmit={handleSubmit(project)}
        method="post"
        className="flex lg:w-[50%] lg:mx-auto w-full px-4 flex-col text-white "
      >
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Product Name
          </label>
          <Input
            required
            {...register("productName", { required: true })}
            className="bg-[#D1D5DB]  lg:w-[70%] text-black "
            type="text"
            placeholder="Product name"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Brand
          </label>
          <Input
            required
            {...register("brand", { required: true })}
            className="bg-[#D1D5DB]  lg:w-[70%] text-black "
            type="text"
            placeholder="Brand"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Price
          </label>
          <Input
            required
            {...register("price", { required: true })}
            className="bg-[#D1D5DB]  lg:w-[70%] text-black "
            type="number"
            placeholder="Price"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Rating
          </label>
          <Input
            required
            {...register("rating", { required: true })}
            className="bg-[#D1D5DB]  lg:w-[70%] text-black "
            type="number"
            placeholder="Rating"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="projectName">
            Description
          </label>
          <Input
            required
            {...register("description", { required: true })}
            className="bg-[#D1D5DB]  lg:w-[70%] text-black "
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1" htmlFor="addImage">
            Add Image
          </label>
          <input
            required
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
            required
            {...register("availableQuantity", { required: true })}
            className="bg-[#D1D5DB]  lg:w-[70%] text-black "
            type="text"
            placeholder="Available quantity"
          />
        </div>

        <div className="flex flex-col md:flex-row w-full md:items-center ">
          <div className="md:w-[30%] mb-1"></div>
          <div className="md:lg:w-[70%] flex gap-6 ">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-1/2 ${
                isLoading
                  ? "bg-orange-100"
                  : "bg-orange-600 hover:bg-orange-700"
              }  transition duration-150 text-black font-medium py-3 px-4  rounded-lg`}
            >
              Add Project
            </button>
            <button
              disabled={isLoading}
              onClick={() => navigate("/dashboard/product-list")}
              type="button"
              className="w-1/2 border border-orange-600 hover:border-orange-700 text-orange-600 hover:text-orange-700 py-3 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
