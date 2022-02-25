import React, { useState, useEffect } from 'react';
import Base from './Base';
import { getProducts } from "./helper/coreapicalls";
import "../styles.css"


function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setProducts(data);
        }
      });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Home Page">
      <h1>hai how are yopu</h1>
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
              <h1>{product.name}</h1>
            </div>
          )
        })}
      </div>
    </Base>
  )
}

export default Home