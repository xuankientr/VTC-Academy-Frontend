import { Link } from 'react-router-dom';
import products from '../contants/data';

const Products = () => {
  return (
    <div>
      <h1>Products:</h1>
      {products.map((product) => (
        <p key={product.id}>
          <Link to={`/products/${product.id}`}>{product.name} (ID)</Link> |
          <Link to={`/products/${product.slug}`}> {product.name} (Slug)</Link>
        </p>
      ))}
    </div>
  );
};

export default Products;
