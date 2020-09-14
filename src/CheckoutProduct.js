import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={image} alt="" />
      <div className="checkoutproduct__info">
        <div className="checkoutproduct__info1">
          <p className="checkoutproduct__title">{title}</p>
          <p className="checkoutproduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <small className="checkoutproductsubtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
