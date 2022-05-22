import { initReactI18next } from 'react-i18next';

import * as FNS from 'date-fns';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';

const OUTPUT_DT_FORMAT = ['dd/MM/yyyy'];

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: 'pt-BR',
    ns: 'translate',
    interpolation: {
      escapeValue: false,
      format: function(value, format) {
        // format date field
        if (value instanceof Date && !!format) {
          return FNS.format(value, format);
        }
        // format string date
        if (!!format && OUTPUT_DT_FORMAT.includes(format) && !!value) {
          const dt = FNS.parse(value, 'yyyy-MM-dd', 0);
          return FNS.format(dt, format);
        }
        // default output
        return value;
      },
    },
  });


export default i18n;
