import React from 'react';
import { useParams } from 'react-router-dom';

const ProductScreen = () => {
  const { id } = useParams();
  return <div>Product id: {id}</div>;
};

export default ProductScreen;
