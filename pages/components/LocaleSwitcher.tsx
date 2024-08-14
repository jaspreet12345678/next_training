import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const router = useRouter();
  const { locale, locales = [], asPath } = router;

  const onLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <select
      value={locale}
      onChange={onLocaleChange}
      className='bg-transparent py-2'
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc}
        </option>
      ))}
    </select>
  );
}
