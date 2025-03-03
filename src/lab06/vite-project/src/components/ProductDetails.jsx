import { useParams } from 'react-router-dom';
import products from '../contants/data';

function ProductDetails() {
  const { id } = useParams();

  const product = isNaN(id)
    ? products.find((p) => p.slug === id)
    : products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
