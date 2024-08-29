import { useCart } from "../../context/cart-context";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";

export const PriceDetails = () => {
  const { cart } = useCart();
  const totalCartAmount = getTotalCartAmount(cart);
  const deliveryCharge = 49;
  return (
    <div className="w-[300px] bg-[#fafafa] p-4">
      <p className="text-2xl border-b-2 p-2 text-center">Price Details</p>
      <div className="flex flex-col gap-5 border-b-4 p-2">
        <div className="flex">
          <p>Price ({cart.length}) items</p>
          <p className="ml-auto">Rs. {totalCartAmount}</p>
        </div>
        <div className="flex">
          <p>Delivery Charge:</p>
          <p className="ml-auto">Rs. {deliveryCharge}</p>
        </div>
        <div className="flex">
          <p>Total Amount</p>
          <p className="ml-auto">Rs. {totalCartAmount + deliveryCharge}</p>
        </div>
        <div>
        <button className="button btn-primary btn-icon cart-btn d-flex text-xl align-center justify-center gap cursor btn-margin">Place Order</button>
        </div>
      </div>
    </div>
  );
};
