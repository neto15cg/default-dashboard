import {combineReducers} from 'redux';
import {darkmodeReducer} from 'src/store/ducks/darkmode';
import {countriesReducer} from 'src/store/ducks/countries';

export const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
  countries: countriesReducer,
});
