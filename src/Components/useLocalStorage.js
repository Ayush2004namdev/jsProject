import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../Slice";

// const dispatch = useDispatch();
function getCart() {
    // const Cart = useSelector((state) => state.Storedata.cart);
    const Cart = JSON.parse(localStorage.getItem("cartItems"));
    return Cart;
  }
  
  function addItemToCart({
    id,
    name,
    price,
    rating,
    discription,
    quantity,
    img,
    date,
  }){
    const cart = { id, name, price, rating, discription, quantity, img, date }

    localStorage.setItem("cartItems", JSON.stringify(cart));
  }
  
  function removeItemFromCart(id) {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    const tempCart = cart.filter((item) => item.id != id);
    localStorage.setItem("cartItems", JSON.stringify(tempCart));
  }
  
  function reduceItemQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    const tempCart = cart.map((item) => {
      if (item.id == id && item.quantity > 1) item.quantity -= 1;
  
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(tempCart));
  }
  
  function addItemQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    const tempCart = cart.map((item) => {
      if (item.id == id) {
        item.quantity += 1;
      }
  
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(tempCart));
  }
  
  function getOrders() {
    if (localStorage.getItem("orderItems"))
      return JSON.parse(localStorage.getItem("orderItems"));
  }
  
  function addOrderItem({
    id,
    name,
    price,
    rating,
    discription,
    quantity,
    img,
    date,
  }) {
    const orders = JSON.parse(localStorage.getItem("orderItems")) || [];
  
    let flag = true;
  
    orders.map((item) => {
      if (item.id == id) flag = false;
    });
  
    if (flag) {
      orders.push({ id, name, price, rating, discription, quantity, img, date });
      localStorage.setItem("orderItems", JSON.stringify(orders));
    }
  }
  
  function addOrderArr(arr) {
    const orders = JSON.parse(localStorage.getItem("orderItems")) || [];
    orders.push(...arr);
    localStorage.setItem("orderItems", JSON.stringify(orders));
  }
  
  function getWishlist() {
    // const wishlist = useSelector((state) => state.Storedata.wishlist);
    return wishlist;
  }
  
  function addItemToWishlist({ id, name, price, img, rating }) {
    const list = getWishlist();
    let flag = true;
  
    console.log({ id, name, price, img, rating });
  
    list.map((item) => {
      if (item?.id == id) {
        flag = false;
      }
    });
  
    if (flag);
      // dispatch(addToWishlist(list))
  }
  
  function removeItemFromWishlist(id) {
    // dispatch(removeFromWishlist(id));
  }
  
  function itemPresentInWishlist(id) {
    // const list = useSelector(state => state.Storedata.wishlist);
    let flag = false;
  
    list.map((item) => {
      if (item?.id == id) flag = true;
    });
    return flag;
  }
  
  export {
    getCart,
    addItemToCart,
    removeItemFromCart,
    addItemQuantity,
    reduceItemQuantity,
    getOrders,
    addOrderItem,
    addOrderArr,
    getWishlist,
    addItemToWishlist,
    removeItemFromWishlist,
    itemPresentInWishlist,
  };
  