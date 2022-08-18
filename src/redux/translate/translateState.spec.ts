import {Languages} from './types';
import {LanguageState, translate as translateReducer} from './reducers';
import {switchLanguagesAction} from './actions';

describe('translate reducer', () => {
  const initialState: LanguageState = {
    q: '',
    source: Languages.Turkish,
    target: Languages.English,
    translatedText: '',
    searchHistory: [],
  };

  it('should handle initial state', () => {
    expect(translateReducer(undefined, {type: 'unknown'})).toEqual({
      q: '',
      source: Languages.Turkish,
      target: Languages.English,
      translatedText: '',
      searchHistory: [],
    });
  });

  it('should handle language switch', () => {
    const actual = translateReducer(initialState, switchLanguagesAction());
    expect(actual.source).toEqual(initialState.target);
    expect(actual.target).toEqual(initialState.source);
  });
});
