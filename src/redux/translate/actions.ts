import {createAction} from '@reduxjs/toolkit';
import {SearchHistoryItem, TranslationRequestPayload} from './types';

export const translationRequestAction =
  createAction<TranslationRequestPayload>('translate');
export const addToSearchHistoryAction =
  createAction<SearchHistoryItem>('addToSearchHistory');
export const triggerHistoryItemAction = createAction<SearchHistoryItem>(
  'triggerHistoryItemAction',
);
export const switchLanguagesAction = createAction('switchLanguages');
export const clearQueryAction = createAction('clearQuery');
