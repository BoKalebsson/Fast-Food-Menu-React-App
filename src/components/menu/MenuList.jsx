import MenuItemCard from "./MenuItemCard.jsx";
import { menuItems } from "../../data/menuItems.js";

function MenuList({ onAddToOrder }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 menulist-region">
      {menuItems.map((item) => (
        <div key={item.id} className="col">
          <MenuItemCard {...item} onAddToOrder={onAddToOrder} />
        </div>
      ))}
    </div>
  );
}

export default MenuList;
