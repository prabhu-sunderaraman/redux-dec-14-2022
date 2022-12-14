import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const add = (state, action) => {
    let { num1, num2 } = action.payload;
    let sum = num1 + num2;
    //BAD DESIGN TO WRITE ASYNC CODE HERE
    
    //return {...state, ...action.payload, sum} //OLD SYNTAX
    
    return {
        num1, num2, sum
    }
}

//Internally createSlice creates actions based on the name and reducers
//Here it creates an action with type "math/add"
const additionSlice = createSlice({
    name: "math",
    initialState: initialState.addition,
    reducers: {
        add
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