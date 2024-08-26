import type { LinguiConfig } from "@lingui/conf";

const config: LinguiConfig = {
  format: "po",
  sourceLocale: "en-US",
  fallbackLocales: { default: "en-US" },
  locales: [
    "ar-SA",
    "de-DE",
    "en-US",
    "es-ES",
    "fr-FR",
    "it-IT",
    "ko-KR",
    "pt-PT",
    "ja-JP",
    "ru-RU",
    "tr-TR",
    "zh-CN",
  ],
  catalogs: [
    {
      include: ["<rootDir>/src"],
      path: "<rootDir>/src/locales/{locale}/messages",
    },
  ],
};

export default config;
