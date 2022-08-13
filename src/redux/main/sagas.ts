import {call, ForkEffect, takeLatest} from 'redux-saga/effects';
import {translationRequestAction} from './actions';
import {TranslationRequestPayload, TranslationSuccessPayload} from './types';
import {PayloadAction} from '@reduxjs/toolkit';
import * as TranslationAPI from './apiCall';

function* doTranslate({payload}: PayloadAction<TranslationRequestPayload>) {
  try {
    const response: TranslationSuccessPayload = yield call(
      TranslationAPI.translate,
      {...payload},
    );
    console.log('response success: ', response);
  } catch (err) {}
}

function* langSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(translationRequestAction.type, doTranslate);
}

export default langSaga;
