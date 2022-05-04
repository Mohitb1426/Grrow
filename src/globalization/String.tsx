import LoginScreens from "./Language/LanguageHeader/LangHeaderEnglish";
import Articles from "./Language/LanguageArticle/LanguageArticlesEnglish";
import LanguageHomeScreen from "./Language/LanguageHomeScreen/LanguageHomeScreenEnglish";
import LanguageInvestors from "./Language/LanguageInvestors/LanguageInvestorsEnglish";
import LangHeaderFrench from "./Language/LanguageHeader/LangHeaderFrench";
import LanguageArticlesFrench from "./Language/LanguageArticle/LanguageArticlesFrench"
import LanguageHomeScreenFrench from "./Language/LanguageHomeScreen/LanguageHomeScreenFrench"
import LanguageInvestorsFrench from "./Language/LanguageInvestors/LanguageInvestorsFrench";
import { useEffect } from "react";

export const strings = {
    ...Articles,
    ...LoginScreens,
    ...LanguageHomeScreen,
    ...LanguageInvestors,
    ...LangHeaderFrench,
    ...LanguageArticlesFrench,
    ...LanguageHomeScreenFrench,
    ...LanguageInvestorsFrench
}