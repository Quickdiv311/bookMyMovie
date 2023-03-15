const { createSlice } = require("@reduxjs/toolkit");

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        selectedSeats: [],
        seatPrice: 150
    },
    reducers: {
        select:(state,action)=>{
            state.selectedSeats.push(action.payload);
        },
        remove:(state,action)=>{
            state.selectedSeats.splice(state.selectedSeats.indexOf(action.payload),1);
        },
        selectDouble:(state,action)=>{
            state.selectedSeats.push(action.payload[0]);
            state.selectedSeats.push(action.payload[1]);
        },
        removeDouble:(state,action)=>{
            state.selectedSeats.splice(state.selectedSeats.indexOf(action.payload[0]),1);
            state.selectedSeats.splice(state.selectedSeats.indexOf(action.payload[1]),1);
        }
    }
})

export const bookingReducer = bookingSlice.reducer;
export const {select,remove,selectDouble,removeDouble} = bookingSlice.actions;
export const bookingSelector = (state) => state.bookingReducer.selectedSeats;