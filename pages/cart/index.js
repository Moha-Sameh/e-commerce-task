import { useCart } from "react-use-cart";
import CartList from "../../components/cart/CartList";

function Cart() {
  const { items } = useCart();
  return <CartList products={items} />;
}

export default Cart;
