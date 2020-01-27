import {Reducer} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from './state';
import createReducer from '../../util/CreateReducer';
import api from '../../services/api';

export enum CountriesTypes {
  ListCountriesStart = '@countries/ListCountriesStart',
  ListCountriesSuccess = '@countries/ListCountriesSuccess',
  ListCountriesFailure = '@countries/ListCountriesFailure',
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
};

export interface LoadingSection {
  'loading.countries': boolean;
}

export interface CountriesState {
  data: {
    countries: any[];
  };

  loading: LoadingSection;
  error: any;
}

export const InitialState: CountriesState = {
  data: {
    countries: [],
  },
  loading: {
    'loading.countries': false,
  },
  error: undefined,
};

export const countriesReducer: Reducer<CountriesState> = createReducer(
  InitialState,
  {
    [CountriesTypes.ListCountriesStart](state: CountriesState) {
      state.loading['loading.countries'] = true;
      return state;
    },
    [CountriesTypes.ListCountriesSuccess](
      state: CountriesState,
      action: Actions['ListCountriesSuccess'],
    ) {
      state.loading['loading.countries'] = false;
      state.data.countries = action.payload;
      return state;
    },
    [CountriesTypes.ListCountriesFailure](
      state: CountriesState,
      action: Actions['ListCountriesFailure'],
    ) {
      state.loading['loading.countries'] = false;
      state.data.countries = [];
      state.error = action.payload;
      return state;
    },
  },
);

export function listCountries(
  region?: string,
  name?: string,
): ThunkAction<Promise<any>, RootState, any, any> {
  return async (dispatch, _): Promise<any> => {
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
