import React, { Component } from "react";
import "./style.css";
import ProductItem from "../product-item";
export default class ProductList extends Component {
  render() {
    const { productList, handleChange } = this.props;

    return (
      <div className="product-list container">
        <div className="row" style={{ backgroundColor: "cornsilk" }}>
          {productList.map((item) => {
            return (
              <ProductItem
                key={item.id}
                productItem={item}
                handleChange={handleChange}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
