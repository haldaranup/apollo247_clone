import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../../db.json";
import "./products.scss";
const Products = () => {
//   const { id } = useParams();
  const handleCheckout = () => {

  };

  return (
    <div className="mainProducts">
        
      {products.map((i) => {
        return (
          <div className="products" key={i.id}>
            <Link to={"/checkout"}>
              <img src={i.img} alt="" />
            </Link>
            <h4>{i.name}</h4>
            <p>
              <strong>Rs</strong> {i.price}
            </p>
            <button onClick={handleCheckout}>Buy Now</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
