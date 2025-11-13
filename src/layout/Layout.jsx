import { useState } from "react";
import Header from "../components/header/Header.jsx";
import MenuList from "../components/menu/MenuList.jsx";
import OrderList from "../components/order/OrderList.jsx";

function Layout() {
  // Create a state for the orders:
  const [orderItems, setOrderItems] = useState([]);

  // Create a function that add products:
  function handleAddToOrder(item) {
    // Check if the product already exists:
    const existingItem = orderItems.find(
      (orderItem) => orderItem.id === item.id
    );

    if (existingItem) {
      // If the product exists -> increase the quantity:
      const updatedItems = orderItems.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrderItems(updatedItems);
    } else {
      // If the product not exists -> add new product:
      const newItem = { ...item, quantity: 1 };
      setOrderItems([...orderItems, newItem]);
    }
  }

  return (
    <div className="container-fluid p-0">
      <Header />

      <main className="container my-4 pb-5">
        <MenuList onAddToOrder={handleAddToOrder} />
      </main>

      <footer className="bg-light border-top fixed-bottom py-3 shadow-sm">
        <OrderList orderItems={orderItems} />
      </footer>
    </div>
  );
}

export default Layout;
