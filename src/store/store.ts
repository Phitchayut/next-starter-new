import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ModalReducer from "./modal/modalSlice";
import UserReducer from "./users/userSlice";

import CustomizerReducer from "./customizer/CustomizerSlice";
import { useDispatch } from "react-redux";


const persistConfig = {
  key: "root",
  storage,
};


export const store = configureStore({
  reducer: {
    customizer: persistReducer<any>(persistConfig, CustomizerReducer),
    modalReducer: ModalReducer,
    userReducer: UserReducer,

  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

const rootReducer = combineReducers({
  customizer: CustomizerReducer,
  modalReducer: ModalReducer,
  userReducer: UserReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
