import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import "../../styles.css";
import { Avatar, Button } from "@material-ui/core";
import GrrowLogo from "../../assets/images/headerImages/grrow_logo.svg";
import { strings } from "../../globalization/String";
import { useStyles } from "./HeaderStyle";
import LoginForm from "../../components/loginComponent/LoginForm";

export default function Header() {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true);
    }
    const classes = useStyles();
    return (
        <div className="App">
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <Avatar variant={"rounded"} alt="The image" src={GrrowLogo} style={{
                            width: 100,
                            height: 27,
                        }} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <Button className="button" onClick={openModal} variant="outlined">{strings.LoginRegister}</Button>
                    </Toolbar>
                </AppBar>
                {modal ? <LoginForm modal={modal} /> : ""}
            </div>
        </div>
    );
}
