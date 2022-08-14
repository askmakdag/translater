import {createAction} from '@reduxjs/toolkit';
import {SearchHistoryItem, TranslationRequestPayload} from './types';

export const translationRequestAction =
  createAction<TranslationRequestPayload>('action/translate');

export const switchLanguagesAction = createAction('action/switchLanguages');

export const addToSearchHistoryAction = createAction<SearchHistoryItem>(
  'action/addToSearchHistory',
);

export const clearQueryAction = createAction('action/clearQuery');
