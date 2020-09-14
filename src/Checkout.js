import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty.</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose — fill it with
              books, CDs, DVDs, toys, electronics, and more. Continue shopping
              on the
              <Link to="/"> Amazon homepage.</Link>
            </p>
          </div>
        ) : (
          <div>
            <div className="checkout__title">
              <h2>Shopping Cart</h2>
              <p className="checkout__pricelabel">Price</p>
            </div>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p className="checkout__bottomsubtotal">
                    Subtotal ({basket.length} items):
                    <strong>{`${value}`}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
