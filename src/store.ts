import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import commandsReducer from './features/commandsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    commands: commandsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;