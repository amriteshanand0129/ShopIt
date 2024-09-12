import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/cart-context";
import { HorizontalProductCard } from "../../components/HorizontalProductCard";
import { PriceDetails } from "../../components/PriceDetails";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col items-center pt-6 mt-20">
        {cart?.length > 0 ? (
          <>
            <h2 className="text-3xl">My Cart</h2>
            <div className="flex">
              <div className="pt-4 flex flex-col gap-4">{cart?.length > 0 && cart.map((product) => <HorizontalProductCard key={product.id} product={product}></HorizontalProductCard>)}</div>
              <div>
                <PriceDetails />
              </div>
            </div>
          </>
        ) : (
          <h2 className="text-3xl">Cart is Empty</h2>
        )}
      </main>
    </>
  );
};
