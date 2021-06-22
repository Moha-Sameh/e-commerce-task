import { useCart } from "react-use-cart";

const CartList = () => {
  const {
    items,
    isEmpty,
    emptyCart,
    updateItemQuantity,
    cartTotal,
    removeItem,
  } = useCart();
  const decrementItemQuantity = (item) =>
    updateItemQuantity(item.id, item.quantity - 1);
  const incrementItemQuantity = (item) =>
    updateItemQuantity(item.id, item.quantity + 1);

  return isEmpty ? (
    <div className="empty">
      <h1>Your Cart is Empty..</h1>
    </div>
  ) : (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>
      {items.map((item) => {
        const itemTotal = item.quantity * item.price;
        return (
          <div key={item.id}>
            <div className="item">
              <div className="buttons">
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn-disabled"
                >
                  &#10008;
                </button>
              </div>
              <div className="description">
                <span>{item.name}</span>
                <span>{item.brand}</span>
              </div>
              <div className="quantity">
                <button
                  onClick={() => decrementItemQuantity(item)}
                  className="btn-decrease"
                >
                  &#8210;
                </button>
                <input type="text" readOnly value={item.quantity} />
                <button
                  onClick={() => incrementItemQuantity(item)}
                  className="btn-add"
                >
                  &#43;
                </button>
              </div>
              <div className="total-price">${itemTotal}</div>
            </div>
          </div>
        );
      })}
      <div className="title">
        <span>Total amount: </span>
        <span>{cartTotal} USD</span>
        <button
          style={{ float: "right" }}
          onClick={emptyCart}
          className="btn-secondary"
        >
          &#10008;
        </button>
      </div>
    </div>
  );
};

export default CartList;
