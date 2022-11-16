import {tagReducer} from "./tagReducer";
import {createStore, combineReducers} from "redux";
import { productReducer } from "./categoryReducer";

export const rootReducer = combineReducers({
    tags: tagReducer,
    products: productReducer
});
