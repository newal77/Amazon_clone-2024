import React, { useEffect, useState } from "react";

import classes from "./Result.module.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";

import ProductCard from "../../components/product/ProductCard";
import Loader from "../../components/Loader/Loader";
function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setisLoading] = useState(false);
  console.log(categoryName);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.product__container}>
            {results?.map((product, id) => (
              <ProductCard product={product} key={id} renderAdd={true} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
