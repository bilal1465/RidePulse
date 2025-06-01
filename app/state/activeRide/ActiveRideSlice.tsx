import { createSlice } from "@reduxjs/toolkit";

interface ActiveRideState {
    value: boolean;
}

const initialState: ActiveRideState = {
    value: false,
};

const ActiveRideSlice = createSlice({
    name: "ride", 
    initialState,
    reducers: {
        activate: (state) => {
            state.value = true;
        },
        deactivate: (state) => {
            state.value = false;
        },
    },
});

export const { activate, deactivate } = ActiveRideSlice.actions; 

export default ActiveRideSlice.reducer;
