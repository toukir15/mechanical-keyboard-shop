import { Input } from "@/components/ui/input";

export default function Checkout() {
  return (
    <div className="text-white flex gap-8 px-12 mb-16 ">
      <div className="w-[60%]">
        <div className="mt-8 border border-gray-500 rounded-lg py-6 px-4">
          <div className="flex gap-4">
            <Input
              style={{ background: "#D1D5DB", color: "black" }}
              type="firstName"
              placeholder="First name"
            />
            <Input
              style={{ background: "#D1D5DB", color: "black" }}
              type="lastName"
              placeholder="Last name"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <Input
              style={{ background: "#D1D5DB", color: "black" }}
              type="email"
              placeholder="Email"
            />
            <Input
              style={{ background: "#D1D5DB", color: "black" }}
              type="number"
              placeholder="Phone"
            />
          </div>
          <div className="mt-4">
            <Input
              style={{ background: "#D1D5DB", color: "black" }}
              type="address"
              placeholder="Delivery address"
            />
          </div>
        </div>
      </div>
      <div className="w-[30%] border h-fit p-4 mt-8 rounded-lg border-gray-500 ">
        <p className="text-xl font-medium">Order Summary</p>
        <div className="flex justify-between mt-2">
          <p>Subtotal (7 items)</p>
          <p>$1,390</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Shipping fee (Free)</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Total</p>
          <p>$1,390</p>
        </div>
        <button className="uppercase bg-orange-500 hover:bg-orange-600 transition duration-150 w-full mt-6 py-3 text-black font-medium text-sm ">
          Place Order
        </button>
      </div>
    </div>
  );
}
