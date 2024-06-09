import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "data",
    initialState: {
        products:[],
        cart:[],
        total:0,
        amount:0, 
        orderItems:[],
        wishlist:[]
    },
    reducers: {
        setStoreData: (state, action) => {
            state.products = action.payload;
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        reduceCartQuantity: (state,action) => {
            const cart = state.cart;
            const id = action.payload
            const tempCart = cart.map((item) => {
                if (item.id == id && item.quantity > 1) item.quantity -= 1;
                return item;
              });
              state.cart = tempCart;
        },
        addCartItemQuantity: (state,action) => {
            const cart = state.cart;
            const id = action.payload
            const tempCart = cart.map((item) => {
                if (item.id == id) {
                  item.quantity += 1;
                }
            
                return item;
              });
              state.cart = tempCart;
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        emptyCart : (state,action) => {
            state.cart = []
        },
        newOrderedItem: (state, action) => {
            state.orderItems = (action.payload);
        },
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
        },
        
    },
});

export const { setStoreData,addToCart,addToWishlist,addCartItemQuantity,reduceCartQuantity,newOrderedItem,removeItem ,removeFromWishlist,emptyCart} = Slice.actions;
export default Slice.reducer;
