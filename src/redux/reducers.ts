import {combineReducers} from 'redux';
import {translate} from './main/reducers';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const translatePersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['searchHistory'],
};

export const persistedRootReducer = combineReducers({
  translate: persistReducer(translatePersistConfig, translate),
});

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
