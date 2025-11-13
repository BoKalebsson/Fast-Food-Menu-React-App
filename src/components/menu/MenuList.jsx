import MenuItemCard from "./MenuItemCard.jsx";
import { menuItems } from "../../data/menuItems.js";

function MenuList() {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      {menuItems.map((item) => (
        <div key={item.id}>
          <MenuItemCard
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        </div>
      ))}
    </div>
  );
}

export default MenuList;
