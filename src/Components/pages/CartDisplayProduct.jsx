import React, { useState } from 'react'
import { addItemQuantity, getCart } from '../useLocalStorage';
import './CartDisplay.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItemQuantity, reduceCartQuantity } from '../../Slice';
import Store from '../../Store.js'


const CartDisplayProduct = (props) => {
    const [quantity, setQuantity] = useState(props.quantity);
    const dispatch = useDispatch();
    const seller = "Seller: DJP Team";
    const { id, name, image, price, rating, handleRemove, calculateTotalPrice,setCartItems } =
      props;
  
    function handleReduce() {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
      dispatch(reduceCartQuantity(id))
      const state = Store.getState();
      setCartItems(state.Storedata.cart);
    }
  
    function handleAdd() {
      setQuantity(quantity + 1);
      dispatch(addCartItemQuantity(id))
      const state = Store.getState();
      setCartItems(state.Storedata.cart);
    }
  
    if (quantity === 0) {
      return null;
    }
    return (
      <div className="single-cart-product-card">
        <div className="cart-card-flex">
          <div className="cart-product-image">
            <img src={image} alt={name} />
            <div className="cart-quantity-buttons">
              <button
                disabled={quantity <= 1}
                onClick={handleReduce}
                className="reduce"
              >
                -
              </button>
              {quantity}
              <button onClick={handleAdd} className="increase">
                +
              </button>
            </div>
          </div>
          <div className="cart-product-details">
            {/* <Link to={`/products/${id}`}> */}
              <h3 className="capitalize">{name}</h3>
            {/* </Link> */}
            <h6>{seller}</h6>
            <h3>{price}</h3>
            <p>{rating}</p>
            <div className="cart-product-buttons">
              <button onClick={() => handleRemove(id)}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CartDisplayProduct