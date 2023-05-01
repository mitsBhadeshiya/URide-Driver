import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AppReducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ["_User", "rideMode"]
};

const appReducer = combineReducers({
    "AppReducer": persistReducer(persistConfig, AppReducer)
});

export type App_State = ReturnType<typeof appReducer>;

const store: Store<App_State> = createStore(appReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };