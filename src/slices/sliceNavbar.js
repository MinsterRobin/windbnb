import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'navbar',
    initialState: {
        isOpen: false,
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