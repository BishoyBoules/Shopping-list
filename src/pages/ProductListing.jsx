import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/storeApi';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  const filteredProducts = category === 'all'
    ? products
    : products.filter(product => product.category === category);

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortOption === 'priceAsc') return a.price - b.price;
    if (sortOption === 'priceDesc') return b.price - a.price;
    if (sortOption === 'titleAsc') return a.title.localeCompare(b.title);
    if (sortOption === 'titleDesc') return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Products</h1>
      <div className="d-flex justify-content-between mb-3">
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: '200px' }}
        >
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
        <select
          className="form-select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{ width: '200px' }}
        >
          <option value="default">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="titleAsc">Title: A to Z</option>
          <option value="titleDesc">Title: Z to A</option>
        </select>
      </div>
      <div className="row">
        {sortedProducts.map(product => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
