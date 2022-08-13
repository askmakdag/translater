import type {RootState} from '../reducers';
import {createSelector} from '@reduxjs/toolkit';

const translateSelector = (state: RootState) => state.translate;

export const q = createSelector(
  translateSelector,
  translationState => translationState.q,
);

export const source = createSelector(
  translateSelector,
  translationState => translationState.source,
);

export const target = createSelector(
  translateSelector,
  translationState => translationState.target,
);

export const translatedText = createSelector(
  translateSelector,
  translationState => translationState.translatedText,
);

export const searchHistory = createSelector(
  translateSelector,
  translationState => translationState.searchHistory,
);
