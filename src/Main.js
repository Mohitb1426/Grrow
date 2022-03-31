import React, { useState } from "react";
import Header from "./commonComponent.js/header/Header";
import HomeScreenCardViews from "./components/homeScreenComponent/HomeScreen";
import KeepLearnKeepGrow from "./components/articlesComponent/Articles";
import Investor from "./components/investorsComponent/Investors";
import OurProduct from "./components/ourProduct/OurProduct";
import ErrorHandler from "./commonComponent.js/errorHandler/ErrorHandler";
import "./styles.css";

const Main = () => {
    const [lang, setLang] = useState(true);

    const langChange = () => {
        setLang(!lang);
    }
    return (
        <div>
            <ErrorHandler><Header change={lang} langChange ={langChange}/></ErrorHandler>
            <ErrorHandler><HomeScreenCardViews change={lang} /></ErrorHandler>
            <OurProduct change={lang} />
            <ErrorHandler> <KeepLearnKeepGrow change={lang} /></ErrorHandler>
            <ErrorHandler><Investor change={lang} /></ErrorHandler>
        </div>
    );
}
export default Main;