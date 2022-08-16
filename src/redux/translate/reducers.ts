import {createReducer} from '@reduxjs/toolkit';
import {
  addToSearchHistoryAction,
  clearQueryAction,
  switchLanguagesAction,
  translationRequestAction,
  triggerHistoryItemAction,
} from './actions';
import {Languages, SearchHistoryItem} from './types';

export interface LanguageState {
  q: string;
  source: Languages;
  target: Languages;
  translatedText: string;
  searchHistory: SearchHistoryItem[];
}

const initialState: LanguageState = {
  q: '',
  source: Languages.Turkish,
  target: Languages.English,
  translatedText: '',
  searchHistory: [],
};

export const translate = createReducer(initialState, {
  [switchLanguagesAction.type]: state => {
    const temp = state.source;
    state.source = state.target;
    state.target = temp;
  },
  [translationRequestAction.type]: (state, action) => {
    state.q = action.payload.q;
  },
  [addToSearchHistoryAction.type]: (state, action) => {
    state.translatedText = action.payload.translatedText;
    state.searchHistory.push(action.payload);
  },
  [triggerHistoryItemAction.type]: (state, action) => {
    state.q = action.payload.q;
    state.source = action.payload.source;
    state.target = action.payload.target;
    state.translatedText = action.payload.translatedText;
  },
  [clearQueryAction.type]: state => {
    state.q = '';
    state.translatedText = '';
  },
});
