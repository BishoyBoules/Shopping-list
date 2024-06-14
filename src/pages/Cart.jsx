import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="list-group">
          {cart.map((item, index) => (
            <div key={index} className="list-group-item">
              <div className="row">
                <div className="col-md-2">
                  <img src={item.image} className="img-fluid" alt={item.title} />
                </div>
                <div className="col-md-10">
                  <h5>{item.title}</h5>
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
