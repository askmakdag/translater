import {TranslationRequestPayload} from './types';
import ApiClient from '../../api';

export async function translate({
  q,
  source,
  target,
  format = 'text',
  api_key = '',
}: TranslationRequestPayload) {
  try {
    // will be filled soon
    await ApiClient.post('https://libretranslate.com/translate', {
      q,
      source,
      target,
      format,
      api_key,
    });
  } catch (error) {
    throw error;
  }
}
