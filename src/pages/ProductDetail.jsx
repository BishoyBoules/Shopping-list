import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/storeApi';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };

    getProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
