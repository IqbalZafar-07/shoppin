import React from "react";
import styles from "./style";

const {
  Card,
  ProductImage,
  ProductName,
  BrandName,
  PriceContainer,
  CurrentPrice,
  OriginalPrice,
  DiscountPercentage,
} = styles;

function ProductCard({ product }) {
  const { name, brand, price, originalPrice, discountPercentage, imageUrl } =
    product;

  return (
    <Card>
      <ProductImage src={imageUrl} alt={name} />
      <ProductName>{name}</ProductName>
      <BrandName>{brand}</BrandName>
      <PriceContainer>
        <CurrentPrice>${price / 100}</CurrentPrice>
        {originalPrice && <OriginalPrice>${originalPrice / 100}</OriginalPrice>}
        {discountPercentage > 0 && (
          <DiscountPercentage>({discountPercentage}% off)</DiscountPercentage>
        )}
      </PriceContainer>
    </Card>
  );
}

export default ProductCard;
