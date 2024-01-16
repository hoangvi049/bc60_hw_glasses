import React, { Component } from "react";
import "./style.css";
import Model from "../model";
import ProductList from "../product-list";
import data from "../dataGlasses.json";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: data,
      selectedProduct: data[0],
    };
  }
  handleChange = (item) => {
    this.setState({
      selectedProduct: item,
    });
  };

  render() {
    const { productList, selectedProduct } = this.state;
    return (
      <>
        <div
          className="home"
          style={{ backgroundImage: `url(./glassesImage/background.jpg)` }}
        >
          <div className="overlay"></div>

          <Model selectedProduct={selectedProduct} />
          <ProductList
            productList={productList}
            handleChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}
