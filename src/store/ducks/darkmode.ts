import {Reducer} from 'redux';
import createReducer from 'src/util/CreateReducer';

export enum DarkmodeTypes {
  Change = '@Darkmode/Change',
}

export type Actions = {
  Darmode: {type: DarkmodeTypes.Change};
};

export interface Data {
  darkmode: boolean;
}

export interface DarkmodeState {
  data: Data;
}

export const InitialState: DarkmodeState = {
  data: {
    darkmode: false,
  },
};

export const darkmodeReducer: Reducer<DarkmodeState> = createReducer(
  InitialState,
  {
    [DarkmodeTypes.Change](state: DarkmodeState) {
      state.data.darkmode = !state.data.darkmode;
      return state;
    },
  },
);

export function changeDarkmode() {
  return (dispatch: any) => {
    dispatch({
      type: DarkmodeTypes.Change,
    });
  };
}
