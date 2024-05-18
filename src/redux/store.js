import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice/general-slice";

export default configureStore({
    reducer: {
        cart:CartReducer
    }
});