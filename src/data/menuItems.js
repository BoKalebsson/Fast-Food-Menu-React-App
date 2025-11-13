import burgerImg from "../assets/images/burger.png";
import pizzaImg from "../assets/images/pizza.png";
import friesImg from "../assets/images/fries.png";
import drinkImg from "../assets/images/softdrink.png";

export const menuItems = [
  {
    id: 1,
    title: "Gourmet Burger",
    description: "Juicy double cheeseburger with lettuce and tomato.",
    price: "89 SEK",
    imageUrl: burgerImg,
  },
  {
    id: 2,
    title: "Margherita Pizza",
    description: "Stone-baked pizza with mozzarella and basil.",
    price: "99 SEK",
    imageUrl: pizzaImg,
  },
  {
    id: 3,
    title: "Crispy Fries",
    description: "Golden fries served with dipping sauce.",
    price: "39 SEK",
    imageUrl: friesImg,
  },
  {
    id: 4,
    title: "Soft Drink",
    description: "Chilled cola with ice cubes.",
    price: "29 SEK",
    imageUrl: drinkImg,
  },
];
