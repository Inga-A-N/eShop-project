import React from "react";
import style from "./FeaturedProducts.module.scss";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import Carousel from "better-react-carousel";

const FeaturedProducts = ({ products }) => {
  const filtredFeaturedProducts = products.filter((item) => item.featured);
  console.log(filtredFeaturedProducts);

  return (
    // <Carousel cols={3} rows={1} gap={10} loop>
    //   <h3>Featured Products</h3>

    //   <div className={style.featuredGrid}>
    //
    //       // <Carousel.Item>
    //       //   product.featured ? (
    //       //   <FeaturedCard key={product.id} product={product} />) : null
    //       // </Carousel.Item>;
    //     })}
    //   </div>
    // </Carousel>

    <div className={style.featuredGrid}>
      <div className={style.headingWithLines}>
        <h3> FEATURED </h3>
      </div>

      <Carousel cols={3} rows={1} gap={10} loop autoplay={5000}>
        {filtredFeaturedProducts.map((product) => (
          <Carousel.Item>
            {<FeaturedCard key={product.id} product={product} />}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
