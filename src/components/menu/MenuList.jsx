import MenuItemCard from "./MenuItemCard.jsx";
import { menuItems } from "../../data/menuItems.js";

function MenuList({ onAddToOrder }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 menulist-region">
      {menuItems.map((item) => (
        <div key={item.id} className="col">
          <MenuItemCard {...item} onAddToOrder={onAddToOrder} />
        </div>
      ))}
    </div>
  );
}

export default MenuList;
