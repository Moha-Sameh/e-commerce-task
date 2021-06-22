import React from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
  return (
    <section>
      {props.data.map((product) => (
        <ProductItem
          key={product.id}
          image={product.picture}
          name={product.name}
          category={product.category}
          price={product.price}
          id={product.id}
          quantity={product.quantity}
        />
      ))}
    </section>
  );
}

export default ProductList;

// <div className="rounded">
// </div>
