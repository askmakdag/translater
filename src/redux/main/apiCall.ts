import {TranslationRequestPayload} from './types';
import ApiClient from '../../api';
const qs = require('qs');

export async function translate({
  q,
  source,
  target,
}: TranslationRequestPayload) {
  try {
    const data = qs.stringify({q, source, target});
    return await ApiClient.post('', data);
  } catch (error) {
    throw error;
  }
}
