import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  max-width: 100%;
  max-height: 100%;
  background-color: white;
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProductName = styled.h3`
  line-height: 1;
  font-weight: bold;
  color: #374151;
  margin-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BrandName = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  margin-bottom: 1rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #4f46e5;
  margin-right: 0.5rem;
`;

const OriginalPrice = styled.span`
  font-size: 0.875rem;
  color: #9ca3af;
  text-decoration: line-through;
  margin-right: 0.5rem;
`;

const DiscountPercentage = styled.span`
  font-size: 0.875rem;
  color: #16a34a;
`;

export default {
  Card,
  ProductImage,
  ProductName,
  BrandName,
  PriceContainer,
  CurrentPrice,
  OriginalPrice,
  DiscountPercentage,
};
