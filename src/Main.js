import React from "react";
import Header from "./commonComponent.js/header/Header";
import HomeScreenCardViews from "./components/homeScreenComponent/HomeScreen";
import KeepLearnKeepGrow from "./components/articlesComponent/Articles";
import Investor from "./components/investorsComponent/Investors";
import OurProduct from "./components/ourProduct/OurProduct";

const Main = () => {
    return (
        <div>
            <Header />
            <HomeScreenCardViews />
            <OurProduct/>
            <KeepLearnKeepGrow />
            <Investor />

        </div>
    );
}
export default Main;