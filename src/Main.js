import React from "react";
import Header from "./commonComponent.js/header/Header";
import HomeScreenCardViews from "./components/homeScreen/HomeScreenCardViews";
import KeepLearnKeepGrow from "./components/keepLearnKeepGrow";

const Main = () => {
    return (
        <div>
            <Header />
            <HomeScreenCardViews />
            <KeepLearnKeepGrow />
        </div>
    );
}
export default Main;