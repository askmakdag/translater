import {ForkEffect, takeLatest} from 'redux-saga/effects';
import {getLangListRequest} from './actions';

function* getLangListSaga() {
  try {
    // this function is gonna be filled
  } catch (err) {}
}

function* langSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(getLangListRequest.type, getLangListSaga);
}

export default langSaga;
