import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllDetails } from "../api/home";



export const initialState = {
    data: [],
    loading: false,
    error: null,
    pagination:10,
}

export const fetchDataAsync = createAsyncThunk(
    'data/fecthData',
    async (incrementByAmount) => {
        console.log(incrementByAmount)
        const response = await getAllDetails(incrementByAmount);
     
        return response.data;
    }
);

const dataSlice = createSlice({
    name: 'datas',
    initialState,
    reducers:{
        increment: (state) => {
            state.pagination += 10;
            console.log(state.pagination)
        },
        decrement: (state) => {
            state.pagination -= 10;
            console.log(state.pagination)
        },
        incrementByAmount: (state, action) => {
            state.pagination += action.payload;
            console.log(action.payload)
        }
    },
    extraReducers : (builder) =>{
        builder
        .addCase(fetchDataAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchDataAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            console.log(action.payload)

        })
    }
})

// export const selectData = (state) => state.data.datas;
export const { increment, decrement, incrementByAmount } = dataSlice.actions;

export default dataSlice.reducer;