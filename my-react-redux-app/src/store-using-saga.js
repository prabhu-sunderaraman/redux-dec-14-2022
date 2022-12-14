import { configureStore, createSlice } from "@reduxjs/toolkit";
import {call, put, takeEvery} from 'redux-saga/effects';
import createSagaMiddleware from "@redux-saga/core"; 

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

function talkToBackendService({num1, num2}) {
    return  fetch(`http://localhost:9000/sum/${num1}/${num2}`)
            .then(response => response.json());
}

function* add(action) {
    if(action.payload.num1 < 100) {
        yield put({type: "math/addFailure", payload: "num1 < 100"});
    } else {
        const output = yield call(talkToBackendService, action.payload);
        yield put({type: "math/addSuccess", payload: output});
        //If you want to dispatch to some other action to fetch records
        //yield put({type: "mathHistory/record", payload: output});
    }
}

function* addSaga() {
    yield takeEvery("math/add", add);
}


//Internally createSlice creates actions based on the name and reducers
//Here it creates an action with type "math/add"
const additionSlice = createSlice({
    name: "math",
    initialState: initialState.addition,
    reducers: {
        addSuccess: (state, action) => {
            let { num1, num2, sum } = action.payload;
            state.num1 = num1;
            state.num2 = num2;
            state.sum = sum;
        },
        addFailure: (state, action) => {
            state.sum = action.payload;
        }
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

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        addition: additionSlice.reducer,
        subtraction: subtractionSlice.reducer
    },
    middleware: [sagaMiddleware] //[thunk]
});
sagaMiddleware.run(addSaga);

export const addActions = additionSlice.actions;
export const subActions = subtractionSlice.actions;