import { configureStore } from "@reduxjs/toolkit";
import cruddReducer from "./cruddSlice";

export default configureStore({
    reducer: {
        cruddReducer,
    }
});
