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
      reader.onload = (r) => {
        setAddImage({
          placeholder: r.target?.result as string,
          file: file,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const project = async (data: any) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (addImage.file) {
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
        {/* Form inputs */}
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1 " htmlFor="productName">
            Product Name
          </label>
          <Input
            {...register("productName", { required: true })}
            className="bg-[#D1D5DB]  lg:w-[70%] text-black "
            type="text"
            placeholder="Product name"
          />
        </div>

        {/* Other input fields */}

        {/* Image upload */}
        <div className="flex flex-col md:flex-row w-full md:items-center mb-2 md:mb-6">
          <label className="md:w-[30%] mb-1" htmlFor="addImage">
            Add Image
          </label>
          <input
            onChange={handleAddImageChange}
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

        {/* Submit and cancel buttons */}
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
              Add Product
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
