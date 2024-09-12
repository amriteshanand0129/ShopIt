import { useCart } from "../../context/cart-context";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate();
  const isProductInCart = findProductInCart(cart, product.id);
  const images = product.images.map(image => image.replace(/[[\]"]/g, ''));
  const onCartClick = (product) => {
    !isProductInCart
      ? cartDispatch({
          type: "ADD_TO_CART",
          payload: { product },
        })
      : navigate("/cart");
  };
  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={images[0]} alt="shoes" />
      </div>
      <div className="card-details">
        <div className="card-title">{product.title}</div>
        <div className="card-description">
          <p className="card-price">Rs. {product.price}</p>
        </div>
        <div className="cta-btn">
          <button className="button btn-primary btn-icon cart-btn d-flex text-xl align-center justify-center gap cursor btn-margin">
            <span className="material-symbols-outlined hover: cursor-pointer">favorite</span>
            Add To WishList
          </button>
        </div>
        <div className="cta-btn">
          <button onClick={() => onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex text-xl align-center justify-center gap cursor btn-margin">
            <span className="material-symbols-outlined hover: cursor-pointer">{isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}</span>
            {isProductInCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
