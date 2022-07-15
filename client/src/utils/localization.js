import { DEFAULT_LOCALE, LOCALES } from "../data/localization";
import { getCookie } from "./cookie";

export const get_current_locale = () => {
  const locale = getCookie("locale") || DEFAULT_LOCALE;
  let flag = false;
  for (const k in LOCALES) {
    if (LOCALES[k].code === locale) {
      flag = true;
    }
  }
  if (!flag) {
    return DEFAULT_LOCALE;
  }
  return locale;
};

export const get_representative_locales = () => {
  const _languages = [];
  Object.keys(LOCALES).forEach((key) => {
    _languages.push({
      name: LOCALES[key].localized_name,
      code: LOCALES[key].code,
    });
  });
  return _languages;
};
