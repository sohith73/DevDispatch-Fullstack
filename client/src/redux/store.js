import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist"
import authSlice from "./users/userSlice"
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
     auth: authSlice,
})

const persistConfig = {
     key: 'user',
     version: 1,
     storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
     reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
               serializableCheck: false,
          }),
})

export const persistor = persistStore(store)

export default store