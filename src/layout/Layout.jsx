import Header from "../components/header/Header.jsx";
import MenuList from "../components/menu/MenuList.jsx";
import OrderList from "../components/order/OrderList.jsx";

function Layout() {
  return (
    <div className="container-fluid p-0">
      <Header />

      <main className="container my-4 pb-5">
        <MenuList />
      </main>

      <footer className="bg-light border-top fixed-bottom py-3 shadow-sm">
        <OrderList />
      </footer>
    </div>
  );
}

export default Layout;
