import {createReducer} from '@reduxjs/toolkit';
import { addToSearchHistoryAction, switchLanguagesAction, translationRequestAction } from "./actions";
import {Languages, SearchHistoryItem} from './types';

export interface LanguageState {
  q: string;
  source: Languages;
  target: Languages;
  searchHistory: SearchHistoryItem[];
  translatedText: string;
}

const initialState: LanguageState = {
  q: '',
  source: Languages.Turkish,
  target: Languages.English,
  translatedText: '',
  searchHistory: [],
};

export const translate = createReducer(initialState, {
  [translationRequestAction.type]: (state, action) => {
    state.q = action.payload.q;
  },
  [addToSearchHistoryAction.type]: (state, action) => {
    state.translatedText = action.payload.translatedText;
    state.searchHistory.push(action.payload);
  },
  [switchLanguagesAction.type]: state => {
    const temp = state.source;
    state.source = state.target;
    state.target = temp;
  },
});
