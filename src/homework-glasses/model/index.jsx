import React, { Component } from "react";
import "./style.css";
export default class Model extends Component {
  render() {
    const { selectedProduct } = this.props;
    return (
      <div className="model container">
        <img src="./glassesImage/model.jpg" className="model-img" alt="" />
        <div className="glass-selected">
          <img src={selectedProduct.url} />
        </div>
        <div className="product-overlay">
          <p>{selectedProduct.desc}</p>
        </div>
      </div>
    );
  }
}
