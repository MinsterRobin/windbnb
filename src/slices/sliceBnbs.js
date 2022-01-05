import {createSlice} from '@reduxjs/toolkit';
import stays from "../data/stays";

export const slice = createSlice({
    name: 'bnbs',
    initialState: {
        bnbs: stays,
        filteredBnbs: stays,
    },
    reducers: {
        filterBnbs: (state, action) => {
            console.log(action.payload);
            state.filteredBnbs = state.bnbs.filter(bnb => {
                return ((bnb.city === action.payload.location.city) || (action.payload.location.city === "")) &&
                    ((bnb.country === action.payload.location.country) || (action.payload.location.country === "")) &&
                    (bnb.maxGuests >= action.payload.guests);
            });
            console.log(state.filteredBnbs);
        }
    }
});

export const {filterBnbs} = slice.actions;

export const selectFilteredBnbs = state => state.bnbs.filteredBnbs;

export default slice.reducer;