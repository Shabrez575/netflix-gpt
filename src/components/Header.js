import { FaGlobe } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  console.log("Current language:", i18n.language);
  console.log("Translated signIn:", t("signIn"));
  console.log("Translated language:", t("language"));

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 text-white z-50 my-4">
      {/* Netflix Logo */}
      <div className="w-3/12 md:w-2/12 lg:w-1/12 xl:w-1.5/12 xsm:mx-8 sm:mx-1 md:mx-10 lg:mx-10 xl:mx-10">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>

      {/* Language + Sign In */}
      <div className="flex items-center space-x-4 mx-8">
        {/* Language Dropdown */}
        <div className="relative inline-block">
          <button className="flex items-center border border-gray-500 px-4 py-1 rounded hover:border-white text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl md:text-base">
            <FaGlobe className="mr-2" />
            {t("language")}
          </button>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="fr">Français</option>
          </select>
        </div>

        {/* Sign In Button */}
        <button className="bg-red-600 hover:bg-red-700 font-bold px-4 py-1.5 rounded text-white text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl md:text-base"
         onClick={() => navigate('/login')}
        >
          {t("signIn")}
        </button>
      </div>
    </div>
  );
};

export default Header;
