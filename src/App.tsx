import { useState } from "react";
import Cart from "./Cart/Cart";
import Cities from "./Cities/Cities";
import Counter from "./Counter/Counter";
import Games from "./Games/Games";
import Message from "./Messsage/Message";
import Nav from "./Nav/Nav";

const App = () => {
  const [cartItems, setCartItems] = useState(["Avocado", "Chicken", "Salmon"]);

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <div>
      <Nav numItems={cartItems.length}/>
      <Cart cart={cartItems} clearCart={clearCart} />
    </div>
  );
};
export default App;
