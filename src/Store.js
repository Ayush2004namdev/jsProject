import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slice";
import UserSlice from "./UserSlice";

const Store = configureStore({
    reducer:{
        Storedata:ProductSlice,
        UserData:UserSlice
    }
})

export default Store;