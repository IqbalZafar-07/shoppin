import { useEffect, useState } from "react";
import cartImg from "../../assets/products/cart.png";
import dislikeImg from "../../assets/products/dislike.png";
import likeImg from "../../assets/products/like.png";
import SplashScreen from "../../common/components/splash-screen";
import SwipeCard from "../../common/components/swipe-card";
import ProductCard from "./product-card";
import { fetchProductList } from "../../apis/products";
import withErrorBoundary from "../../common/hoc/withErrorBoundary";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProductData = async () => {
    try {
      const response = await fetchProductList();
      setProductList(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleSwipe = (product, direction) => {
    const information = `${
      direction === "left"
        ? "Disliked"
        : direction === "right"
        ? "Liked"
        : "Add to cart"
    } Product ID: [${product.id}]`;

    console.log(information);
  };

  if (loading) return <SplashScreen />;

  return (
    <SwipeCard
      data={productList}
      renderCard={(product) => <ProductCard product={product} />}
      onSwipe={handleSwipe}
      icons={{
        like: likeImg,
        dislike: dislikeImg,
        superlike: cartImg,
      }}
    />
  );
};

export default withErrorBoundary(Products);
