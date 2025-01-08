'use client';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import LoginButton from './LoginButton';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';


function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false); // Tracks the dropdown state
  const [language, setLanguage] = useState('EN'); // Tracks the selected language
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'EN', label: 'English', flag: '/flags/gb.svg' },
    { code: 'TM', label: 'Turkmen', flag: '/flags/tm.svg' },
    { code: 'RU', label: 'Russian', flag: '/flags/ru.svg' },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false); // Close the dropdown after selection
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white text-gray-700 px-3 py-2 rounded-full shadow-md"
      >
        <img src={languages.find((l) => l.code === language).flag} alt="Flag" className="h-4 w-4" />
        <span>{language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md">
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className="flex items-center gap-2 px-3 py-2 w-full text-gray-700 hover:bg-gray-100"
            >
              <img src={flag} alt={`${label} Flag`} className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header() {
  const [searchTerm, setSearchTerm] = useState(''); // Tracks the current search term
  const dropdownRef = useRef(null); // Ref for the dropdown
  const { t } = useTranslation('common');



  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Close all dropdowns
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach((dropdown) => {
        dropdown.classList.add('hidden');
      });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-50 to-slate-100 backdrop-blur-md shadow-md">
      <nav className="mx-auto max-w-7xl flex items-center justify-between py-2 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/BizBilen.png" alt="Biz Bilen" width={150} height={50} priority />
          </Link>
        </div>

        {/* Links */}
        <ul className="flex space-x-10">
          <li>
            <Link href="/blog" className="text-emerald-700 hover:text-green-900 transition">
              {t('blog')}
            </Link>
          </li>
          <li>
            <Link href="/bolumlerimiz" className="text-emerald-700 hover:text-green-900 transition">
              {t('departments')}
            </Link>
          </li>
          <li>
            <Link href="/hyzmatlar" className="text-emerald-700 hover:text-green-900 transition">
              {t('services')}
            </Link>
          </li>
          <li>
            <Link href="/forum" className="text-emerald-700 hover:text-green-900 transition">
              {t('forum')}
            </Link>
          </li>
        </ul>

        {/* Search Bar and Language Selector */}
        <div className="flex items-center space-x-4" ref={dropdownRef}>
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="outline-none w-full text-gray-700"
            />
            <button className="text-gray-700">
              <FiSearch size={20} />
            </button>
          </div>

          {/* Language Selector */}
          <LanguageSelector />

          {/* Login Button */}
          <LoginButton />


        </div>
      </nav>
    </header>
  );
}

export default Header;