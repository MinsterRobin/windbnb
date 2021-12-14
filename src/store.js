import {configureStore} from "@reduxjs/toolkit";
import sliceNavbar from "./slices/sliceNavbar";

export default configureStore({
    reducer: {
        navbar: sliceNavbar
    },
});