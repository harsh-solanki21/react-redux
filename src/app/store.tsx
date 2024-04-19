import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import userReducer from "../features/asyncThunk/userSlice";
import { apiSlice } from "../features/rtkQuery/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,

    [apiSlice.reducerPath]: apiSlice.reducer, // RTK Query

    users: userReducer, // asyncThunk
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // RTK Query
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
