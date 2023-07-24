import React from "react";
import style from "./FeaturedProducts.module.scss";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import Carousel from "better-react-carousel";

const FeaturedProducts = ({ products, items, buttonClick }) => {
  return (
    <div className={style.featuredGrid}>
      <div className={style.headingWithLines}>
        <h3> FEATURED </h3>
      </div>

      <Carousel cols={2} rows={1} gap={10} loop autoplay={5000}>
        {products
          .filter((product) => product.featured)
          .map((product) => (
            <Carousel.Item key={product.id}>
              <FeaturedCard
                product={product}
                items={items}
                buttonClick={buttonClick}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
