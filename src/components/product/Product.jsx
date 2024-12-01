import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Product.module.css";
import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";
function Product() {
  const [products, setproducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")

      .then((res) => {
        setproducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product__container}>
          {products?.map((singleproduct, id) => (
            <ProductCard product={singleproduct} key={id} renderAdd={true} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
