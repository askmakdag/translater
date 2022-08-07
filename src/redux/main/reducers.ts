import {createReducer} from '@reduxjs/toolkit';
import {getLangListRequest} from './actions';

export interface LanguageState {
  langList: {
    lang: string;
  };
}

const initialState: LanguageState = {
  langList: {
    lang: 'en-EN',
  },
};

export const langReducer = createReducer(initialState, {
  [getLangListRequest.type]: state => {
    state.langList.lang = '';
  },
});
