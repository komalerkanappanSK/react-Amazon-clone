import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import { Link } from "react-router-dom";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      {orders?.length === 0 ? (
        <div>
          <img
            className="orders__img"
            src="https://www.pngmart.com/files/12/Pokemon-Detective-Pikachu-Movie-PNG-HD.png"
            alt=""
          />
          <h1>Oops!!! No Orders Done.</h1>
          <p>Please Logged In and Order your Items...</p>
          <p>
            Your Amazon Orders lives to serve. Give it purpose — fill your
            orders with books, CDs, DVDs, toys, electronics, and more. Continue
            shopping on the
            <Link to="/"> Amazon homepage.</Link>
          </p>
        </div>
      ) : (
        <div className="orders__order">
          <h1>Your Orders</h1>
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
