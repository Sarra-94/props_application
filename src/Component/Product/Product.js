import React from "react";
import PropTypes from "prop-types";
const Product = (props) => {
  return (
    <div>
      <img src={props.product.image} />
      <h2>{props.product.name}</h2>
      <h2>{props.product.price}</h2>
      <button
        onClick={() =>
          props.handleData(props.product.name, props.product.price)
        }
      >
        Details
      </button>
    </div>
  );
};
Product.defaultProps = {
  product: {
    name: "inconnu",
    image: "nthg",
    price: "0",
  },
};
Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
