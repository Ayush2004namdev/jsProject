import React, { useEffect, useState } from 'react'
import Landing from './Components/Landing/Landing'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Product from './Components/Product/Product'
import Cart from './Components/pages/Cart'
import Order from './order/Order'
import Navbar from './Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, toggleSignedIn } from './UserSlice'

const App = () => {
  
  const dispatch = useDispatch();

  const checkIsSignedIn = useSelector((state) => state.UserData.isSignedIn);
  const [isSignedIn, setIsSignedIn] = useState(checkIsSignedIn);
  const cartItems = useSelector((state) => state.Storedata.cart);

  const [cartItemsCount, setCartItemsCount] = useState(cartItems.length);

  function signIn() {
    dispatch(toggleSignedIn());
    console.log(isSignedIn);
    setIsSignedIn(!isSignedIn);
  }


  return (
    <>
    <BrowserRouter>
        <Navbar cartItemsCount={cartItemsCount} isSignedIn={isSignedIn} signIn={signIn} />
      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/products/:id" element={<Product setCartItemsCount={setCartItemsCount}/>} />
          <Route path='/cart' element={<Cart setCartItemsCount={setCartItemsCount} />} />
          <Route path='/orders' element={<Order setCartItemsCount={setCartItemsCount} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App