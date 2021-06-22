import { useState } from "react";
import { useCart } from "react-use-cart";

function ProductItem(props) {
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(props.quantity);

  const addToCart = () => {
    addItem({
      id: props.id,
      price: props.price,
      name: props.name,
      brand: props.category,
    });
    setQuantity(quantity - 1);
  };

  return (
    <div className="card">
      <div className="images">
        <img src={props.image} />
      </div>
      <div className="product">
        <p>{props.category}</p>
        <h1>{props.name}</h1>
        <h4>Available:{quantity}</h4>
        <h2>${props.price}</h2>
        <div>
          <button
            onClick={addToCart}
            className={props.quantity > 0 ? "btn-primary" : "btn-disabled"}
            disabled={props.quantity > 0 ? false : true}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
