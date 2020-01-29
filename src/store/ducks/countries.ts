import {Reducer} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from './state';
import createReducer from '../../util/CreateReducer';
import api from '../../services/api';

export enum CountriesTypes {
  ListCountriesStart = '@countries/ListCountriesStart',
  ListCountriesSuccess = '@countries/ListCountriesSuccess',
  ListCountriesFailure = '@countries/ListCountriesFailure',
  GetCountriesStart = '@countries/GetCountriesStart',
  GetCountriesSuccess = '@countries/GetCountriesSuccess',
  GetCountriesFailure = '@countries/GetCountriesFailure',
}

export type CurrencyType = {
  code: string;
  name: string;
  symbol: string;
};

export type LanguagesType = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type TranslationsTypes = {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
};

export type RegionalBlocsTypes = {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
};

export type CountryType = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: CurrencyType[];
  languages: LanguagesType[];
  translations: TranslationsTypes;
  flag: string;
  regionalBlocs: RegionalBlocsTypes[];
  cioc: string;
};

export type Actions = {
  ListCountriesStart: {type: CountriesTypes.ListCountriesStart};
  ListCountriesSuccess: {
    type: CountriesTypes.ListCountriesSuccess;
    payload: CountryType[];
  };
  ListCountriesFailure: {
    type: CountriesTypes.ListCountriesFailure;
    payload: any;
  };
  GetCountriesStart: {type: CountriesTypes.GetCountriesStart};
  GetCountriesSuccess: {
    type: CountriesTypes.GetCountriesSuccess;
    payload: CountryType;
  };
  GetCountriesFailure: {
    type: CountriesTypes.GetCountriesFailure;
    payload: any;
  };
};

export interface LoadingSection {
  'loading.list': boolean;
  'loading.get': boolean;
}

export interface CountriesState {
  data: {
    countries: CountryType[];
    country: CountryType;
  };

  loading: LoadingSection;
  error: any;
}

export const InitialState: CountriesState = {
  data: {
    countries: [],
    country: {} as CountryType,
  },
  loading: {
    'loading.list': false,
    'loading.get': false,
  },
  error: undefined,
};

export const countriesReducer: Reducer<CountriesState> = createReducer(
  InitialState,
  {
    [CountriesTypes.ListCountriesStart](state: CountriesState) {
      state.loading['loading.list'] = true;
      state.data.countries = [];
      return state;
    },
    [CountriesTypes.ListCountriesSuccess](
      state: CountriesState,
      action: Actions['ListCountriesSuccess'],
    ) {
      state.loading['loading.list'] = false;
      state.data.countries = action.payload;
      return state;
    },
    [CountriesTypes.ListCountriesFailure](
      state: CountriesState,
      action: Actions['ListCountriesFailure'],
    ) {
      state.loading['loading.list'] = false;
      state.data.countries = [];
      state.error = action.payload;
      return state;
    },
    [CountriesTypes.GetCountriesStart](state: CountriesState) {
      state.loading['loading.get'] = true;
      state.data.country = {} as CountryType;
      return state;
    },
    [CountriesTypes.GetCountriesSuccess](
      state: CountriesState,
      action: Actions['GetCountriesSuccess'],
    ) {
      state.loading['loading.get'] = false;
      state.data.country = action.payload;
      return state;
    },
    [CountriesTypes.GetCountriesFailure](
      state: CountriesState,
      action: Actions['GetCountriesFailure'],
    ) {
      state.loading['loading.get'] = false;
      state.data.country = {} as CountryType;
      state.error = action.payload;
      return state;
    },
  },
);

export function listCountries(
  region?: string,
  name?: string,
): ThunkAction<Promise<any>, RootState, any, any> {
  return async (dispatch): Promise<any> => {
    dispatch({
      type: CountriesTypes.ListCountriesStart,
    } as Actions['ListCountriesStart']);
    var url = 'all';
    if (name) {
      url = `name/${name}`;
    } else if (region) {
      url = region ? `region/${region}` : 'all';
    }

    return new Promise((resolve, reject) => {
      api
        .get(url)
        .then((response: any) => {
          dispatch({
            type: CountriesTypes.ListCountriesSuccess,
            payload: response.data,
          } as Actions['ListCountriesSuccess']);
          resolve(response);
        })
        .catch((err: any) => {
          dispatch({
            type: CountriesTypes.ListCountriesFailure,
            payload: err.response.data,
          } as Actions['ListCountriesFailure']);
          reject();
        });
    });
  };
}

export function getCountries(
  alpha3Code: string,
): ThunkAction<Promise<any>, RootState, any, any> {
  return async (dispatch): Promise<any> => {
    dispatch({
      type: CountriesTypes.GetCountriesStart,
    } as Actions['GetCountriesStart']);
    var url = `alpha/${alpha3Code}`;

    return new Promise((resolve, reject) => {
      api
        .get(url)
        .then((response: any) => {
          dispatch({
            type: CountriesTypes.GetCountriesSuccess,
            payload: response.data,
          } as Actions['GetCountriesSuccess']);
          resolve(response);
        })
        .catch((err: any) => {
          dispatch({
            type: CountriesTypes.GetCountriesFailure,
            payload: err.response.data,
          } as Actions['GetCountriesFailure']);
          reject();
        });
    });
  };
}
