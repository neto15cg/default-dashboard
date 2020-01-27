import {DarkmodeState} from 'src/store/ducks/darkmode';
import {CountriesState} from 'src/store/ducks/countries';

export interface RootState {
  darkmode: DarkmodeState;
  countries: CountriesState;
}
