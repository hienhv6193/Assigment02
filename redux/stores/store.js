import {createStore, combineReducers} from "redux";
import {rootReducer} from "../reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer,persistStore } from "redux-persist";

const persistConfig = {
    key:'root',
    storage: AsyncStorage,
};

const persistedReducer =  persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store,persistor}
};