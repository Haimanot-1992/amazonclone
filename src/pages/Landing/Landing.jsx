import React from "react";
import Category from "../../components/Category/Category";

import LayOut from "../../Layout/Layout";
import Product from "../../components/product/product";
import CarouselEffect from "../../components/Carousel/CarouselEffect";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
