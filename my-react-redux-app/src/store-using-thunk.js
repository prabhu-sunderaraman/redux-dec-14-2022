import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    addition: {
        num1: '',
        num2: '',
        sum: ''
    },
    subtraction: {
        num1: '',
        num2: '',
        difference: ''
    }
};

const subtract = (state, action) => {
    let { num1, num2 } = action.payload;
    let difference = num1 - num2;
    
    return {
        num1, num2, difference
    }
}

//Whenever the component dispatches an action math/add, intercept it
export const add = createAsyncThunk(
    "math/add", 
    async(args, thunkApi) => {
        let { num1, num2 } = args;
        if(num1 < 100) {
            return thunkApi.rejectWithValue("num1 < 100");
        }
        return await fetch(`http://localhost:9000/sum/${num1}/${num2}`)
                .then(response => response.json());
    }
);


//Internally createSlice creates actions based on the name and reducers
//Here it creates an action with type "math/add"
const additionSlice = createSlice({
    name: "math",
    initialState: initialState.addition,
    extraReducers(builder) {
        builder
            .addCase(add.fulfilled, (state, action) => {
                let { num1, num2, sum } = action.payload;
                state.num1 = num1;
                state.num2 = num2;
                state.sum = sum;
            })
            .addCase(add.rejected, (state, action) => {
                state.sum = "Error: " + action.payload;
            })
            .addCase(add.pending, (state, action) => {
                // let { num1, num2 } = action.payload;
                // state.num1 = num1;
                // state.num2 = num2;
                state.sum = "Pending action"
            })
    }
});

//Internally createSlice creates actions based on the name and reducers
//Here it creates an action with type "mymath/subtract"
const subtractionSlice = createSlice({
    name: "mymath",
    initialState: initialState.subtraction,
    reducers: {
        subtract
    }
});

export const store = configureStore({
    reducer: {
        addition: additionSlice.reducer,
        subtraction: subtractionSlice.reducer
    }
});

export const addActions = additionSlice.actions;
export const subActions = subtractionSlice.actions;