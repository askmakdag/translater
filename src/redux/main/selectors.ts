import type {RootState} from '../reducers';
import {createSelector} from '@reduxjs/toolkit';

const languageSelector = (state: RootState) => state.languages;

export const allLanguages = createSelector(
  languageSelector,
  languagesState => languagesState.langList.lang,
);
