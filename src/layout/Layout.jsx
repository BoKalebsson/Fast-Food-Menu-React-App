import Header from "../components/header/Header.jsx";
import MenuList from "../components/menu/MenuList.jsx";
import OrderList from "../components/order/OrderList.jsx";

function Layout() {
  return (
    <div className="container-fluid p-0">
      <Header />

      <main className="container my-4">
        <MenuList />
      </main>

      <footer className="container-fluid border-top py-3 bg-light">
        <OrderList />
      </footer>
    </div>
  );
}

export default Layout;
