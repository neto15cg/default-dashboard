import {combineReducers} from 'redux';
import {darkmodeReducer} from 'src/store/ducks/darkmode';

export const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
});
