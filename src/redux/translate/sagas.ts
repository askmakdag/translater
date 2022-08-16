import {put, call, select, ForkEffect, takeLatest} from 'redux-saga/effects';
import {addToSearchHistoryAction, translationRequestAction} from './actions';
import {
  TranslationRequestActionPayload,
  TranslationSuccessPayload,
} from './types';
import {PayloadAction} from '@reduxjs/toolkit';
import * as TranslationAPI from './apiCall';

function* doTranslate({
  payload,
}: PayloadAction<TranslationRequestActionPayload>) {
  try {
    const {source, target} = yield select(s => s.translate);
    const {
      data: {
        data: {translations},
      },
    }: TranslationSuccessPayload = yield call(TranslationAPI.translate, {
      ...payload,
      source,
      target,
    });

    const translatedText: string = translations[0].translatedText;
    yield put(
      addToSearchHistoryAction({
        ...payload,
        source,
        target,
        translatedText,
      }),
    );
  } catch (err) {}
}

function* langSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(translationRequestAction.type, doTranslate);
}

export default langSaga;
