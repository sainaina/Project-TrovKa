import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const languages = [
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  { code: 'kh', name: 'KH', flag: '🇰🇭' },
];

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="flex items-center">
            <span className="mr-2">{currentLanguage.flag}</span>
            {currentLanguage.name}
          </span>
          <FaCaretDown className="ml-2 -mr-1" />
        </button>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 w-24 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
