export enum Languages {
  Turkish = 'tr',
  English = 'en',
}

export type TranslationRequestPayload = {
  q: string;
  source?: Languages;
  target?: Languages;
};

export type TranslationRequestActionPayload = Omit<
  TranslationRequestPayload,
  'source' | 'target'
>;

export type SearchHistoryItem = TranslationRequestPayload & {
  translatedText: string;
};

export type Translation = {
  translatedText: string;
};

export type TranslationSuccessPayload = {
  data: {
    data: {
      translations: Translation[];
    };
  };
};
