import React from "react";
import Layout from "../../Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Product from "../../components/product/Product";

function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
