import React, { Component } from "react";
import "./style.css";
export default class ProductItem extends Component {
  changeProduct = () => {
    const { productItem, handleChange } = this.props;
    handleChange(productItem);
  };

  render() {
    const { productItem } = this.props;

    return (
      <div className="product-item col-md-2">
        <a className="btn" onClick={this.changeProduct}>
          <img
            className="img-item"
            src={productItem.url}
            alt=""
            style={{ width: "100%", margin: "0 auto" }}
          />
        </a>
      </div>
    );
  }
}
