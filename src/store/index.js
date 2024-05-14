import { configureStore } from "@reduxjs/toolkit";
import * as reducers from "./slices";

const store = configureStore({
    reducer:{
        data : reducers.dataSlice,
    },
});

export default store;