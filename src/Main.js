import React from "react";
import Header from "./commonComponent.js/header/Header";
import HomeScreenCardViews from "./components/homeScreenComponent/HomeScreen";
import KeepLearnKeepGrow from "./components/articlesComponent/Articles";
import Investor from "./components/investorsComponent/Investors";

const Main = () => {
    return (
        <div>
            <Header />
            <HomeScreenCardViews />
            <KeepLearnKeepGrow />
            <Investor />
        </div>
    );
}
export default Main;