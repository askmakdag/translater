import {createAction} from '@reduxjs/toolkit';
import {TranslationRequestPayload} from './types';

export const translationRequestAction =
  createAction<TranslationRequestPayload>('action/translate');

export const switchLanguagesAction = createAction('action/switchLanguages');

export const addToSearchHistoryAction = createAction(
  'action/addToSearchHistory',
);
