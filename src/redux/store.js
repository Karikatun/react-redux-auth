import { createStore } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import userReducer from './reducers/user';

const persistConfig = {
  key: 'root',
  storage,
};

const pReducer = persistCombineReducers(persistConfig, {
  currentUser: userReducer,
});

export const store = createStore(pReducer);
export const persistor = persistStore(store);