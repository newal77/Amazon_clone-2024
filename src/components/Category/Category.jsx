import React from "react";
import { CategoryData } from "./CategoryInfo";

import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {CategoryData?.map((infos, i) => (
        <CategoryCard key={i} data={infos} />
      ))}
    </section>
  );
}

export default Category;
