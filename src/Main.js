import React from "react";
import Header from "./commonComponent.js/header/Header";
import HomeScreenCardViews from "./components/homeScreenComponent/HomeScreen";
import KeepLearnKeepGrow from "./components/articlesComponent/Articles";
import Investor from "./components/investorsComponent/Investors";
import ErrorHandler from "./commonComponent.js/errorHandler/ErrorHandler";

const Main = () => {
    return (
        <div>
            <ErrorHandler><Header /></ErrorHandler>
            <ErrorHandler><HomeScreenCardViews /></ErrorHandler>
            <ErrorHandler> <KeepLearnKeepGrow /></ErrorHandler>
            <ErrorHandler><Investor /></ErrorHandler>
        </div>
    );
}
export default Main;