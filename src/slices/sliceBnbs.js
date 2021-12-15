import {createSlice} from '@reduxjs/toolkit';
import stays from "../data/stays";

export const slice = createSlice({
    name: 'bnbs',
    initialState: {
        bnbs: stays,
    },
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
        }
    }
});

export const {setIsOpen} = slice.actions;

export const selectNavbarIsOpen = state => state.navbar.isOpen;

export default slice.reducer;