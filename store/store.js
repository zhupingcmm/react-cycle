// import {createStore} from "redux";
//const {createStore,combineReducers,applyMiddleware} = require("../fake-redux");
// const {applyMiddleware} = require("../fake-redux/fake-applyMiddleware");
 const {createStore,combineReducers,applyMiddleware} = require("redux");
const {reduxError} = require("./redux-plugin/redux-error");

const rootReducer=(state={data:0},action)=>{
    const {type,data} = action;
    switch (type) {
        case "ADD":
        return {
            ...state,
            data:state.data + data
        };
        case "DELETE":
            return{
                ...state,
                data:state.data -data
            };
        default:
            return state;
    }
};

const testReducer=(state={list:[]},action)=>{
    const {type,data} =action;
    switch (type) {
        case "PUSH":
            return{
                ...state,
                list:state.list.concat(data)
            };
        default:
            return state
    }
};

const reducers = combineReducers({
    root:rootReducer,
    test:testReducer
});



const store =createStore(reducers,applyMiddleware(reduxError));

export default store;

// store.subscribe(()=>{
//     console.log("state::",store.getState())
// });
//
// store.dispatch({
//     type:"ADD",
//     data:2
// });
//
// store.dispatch({
//     type:"ADD",
//     data:2
// });
// store.dispatch({
//     type:"DELETE",
//     data:1
// });
//
// store.dispatch({
//    type:"PUSH",
//    data:10
// });
