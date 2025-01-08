'use client';

import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();

  const switchLanguage = (lang) => {
    router.push(`/${lang}`);
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('tm')}>Türkmençe</button>
      <button onClick={() => switchLanguage('ru')}>Русский</button>
    </div>
  );
};

export default LanguageSwitcher;
