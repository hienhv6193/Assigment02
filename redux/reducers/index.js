import {tagReducer} from "./tagReducer";
import {createStore, combineReducers} from "redux";

export const rootReducer = combineReducers({
    tags: tagReducer,
});
