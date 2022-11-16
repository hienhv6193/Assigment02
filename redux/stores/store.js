// import {createStore, combineReducers} from "redux";
// import {tagReducer} from "../reducers/tagReducer";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import storage from "redux-persist/lib/storage";
// import storageSession from "redux-persist/lib/storage/session";
// import { persistReducer,persistStore } from "redux-persist";

// const persistConfig = {
//     key:'root',
//     storage: AsyncStorage,
// };

// const persistedReducer =  persistReducer(persistConfig, tagReducer);

// // export default () => {
// //     let store = createStore(persistedReducer)
// //     let persistor = persistStore(store)
// //     return { store,persistor}
// // };
// export const store = createStore(persistedReducer)
// export const persistor = persistStore(store)
import {createStore, combineReducers} from "redux";
import {tagReducer} from "../reducers/tagReducer";
import {rootReducer} from "../reducers"

const store=createStore(rootReducer);
export default store;