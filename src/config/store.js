import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "../store/reducers/Reducer";

const rootReducer = combineReducers({ loginReducer: Reducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
