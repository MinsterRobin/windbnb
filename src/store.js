import {configureStore} from "@reduxjs/toolkit";
import sliceNavbar from "./slices/sliceNavbar";
import sliceBnbs from "./slices/sliceBnbs";

export default configureStore({
    reducer: {
        navbar: sliceNavbar,
        bnbs: sliceBnbs
    },
});