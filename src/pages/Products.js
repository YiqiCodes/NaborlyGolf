import React from "react";

// Components
import ProductListings from "../components/products/ProductListings";

// Hooks
import useGetProducts from "../hooks/GetWithSWR/UseGetProducts";

const Products = () => {
  const { products, isLoading, isError } = useGetProducts();

  if (isLoading || isError) return null;

  return <ProductListings products={products.products} />;
};

export default Products;
