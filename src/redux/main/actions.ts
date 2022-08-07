import {createAction} from '@reduxjs/toolkit';
import {LanguagePayload} from './types';

export const getLangListRequest = createAction<LanguagePayload>(
  'ACTION/GET_LANG_LIST_REQUEST',
);
