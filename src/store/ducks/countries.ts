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

export type Actions = {
  ListCountriesStart: {type: CountriesTypes.ListCountriesStart};
  ListCountriesSuccess: {
    type: CountriesTypes.ListCountriesSuccess;
    payload: any[];
  };
  ListCountriesFailure: {
    type: CountriesTypes.ListCountriesFailure;
    payload: any;
  };
  GetCountriesStart: {type: CountriesTypes.GetCountriesStart};
  GetCountriesSuccess: {
    type: CountriesTypes.GetCountriesSuccess;
    payload: any;
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
    countries: any[];
    country: any;
  };

  loading: LoadingSection;
  error: any;
}

export const InitialState: CountriesState = {
  data: {
    countries: [],
    country: {},
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
      state.loading['loading.list'] = true;
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
      state.loading['loading.list'] = false;
      state.data.countries = {} as any;
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
