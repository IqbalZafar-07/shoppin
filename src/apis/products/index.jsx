import { productList } from "./metaData";

export const fetchProductList = () => {
  return new Promise((ressolve) => {
    setTimeout(() => {
      ressolve(productList);
    }, 3000);
  });
};
