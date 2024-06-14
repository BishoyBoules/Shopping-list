import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <header className="bg-light p-3 mb-4">
      <nav className="container d-flex justify-content-between">
        <div>
          <Link to="/" className="btn btn-link">Products</Link>
          <Link to="/cart" className="btn btn-link">Cart ({cartCount})</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
