import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "../../styles.css";
import { Avatar, Button } from "@material-ui/core";
import GrrowLogo from "../../assets/images/grrow_logo.svg";
const useStyles = makeStyles((theme) => ({
    grow: { flexGrow: 1 }, 
    menuButton: { marginRight: theme.spacing(2) },
    title: { display: "none", [theme.breakpoints.up("sm")]: { display: "block" } },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto"
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
}));
export default function Header() {
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
                        <Button className="button" variant="outlined">Login/Register</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}