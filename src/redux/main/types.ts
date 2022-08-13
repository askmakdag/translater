export enum Languages {
  Turkish = 'tr',
  English = 'en',
}

export type TranslationRequestPayload = {
  q: string;
  source: Languages;
  target: Languages;
  format: string;
  api_key: string;
};

export type SearchHistoryItem = Omit<
  TranslationRequestPayload & TranslationSuccessPayload,
  'api_key' | 'format'
>;

export type TranslationSuccessPayload = {
  translatedText: string;
};

export type LanguagePayload = {
  lang?: string;
};
