import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import "../../styles.css";
import React, { useEffect, useState } from "react";
import { strings } from "../../globalization/String";
import "./homeScreen.css";
import MutualFunds from "../../assets/images/homeScreenImages/mfHome.af668dea.svg";
import StocksImage from "../../assets/images/homeScreenImages/stockHome.af2af225.svg";
import FuturesOptionsImage from "../../assets/images/homeScreenImages/optionHome.5e98a896.svg";
import USStocksImage from "../../assets/images/homeScreenImages/stockHome.af2af225.svg";
import IPOImage from "../../assets/images/homeScreenImages/ipoHome.b071ba94.svg";
import FixedDepositsImage from "../../assets/images/homeScreenImages/fdHome.ba2c5441.svg";
import { Avatar } from "@material-ui/core";

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const textArray = ['Mutual Funds', 'Stocks', 'Futures & Options', 'US Stocks', 'IPO', 'Fixed Deposits'];
const HomeScreen = (props) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    let textThatChanges = textArray[seconds % textArray.length];
    return (
        <div className='cardView-center'>
            <Grid container columns={16}>
                <Grid className="homeScreenCardViews-invest" item xs={10}>
                    <div className="homeScreenCardViews-span">
                        <div style={divStyle}>
                            <h1 >{props.change ? strings.FDInvest:strings.FrenchFDInvest} </h1>
                            <h1 className="suffle-text">{textThatChanges}</h1>
                        </div>

                        <h3 >{strings.FDInvestDescription}</h3>
                        <Button className="homeScreenCardViews-button" variant="outlined">{props.change ? strings.GetStarted : strings.FrenchGetStarted}</Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Grid alignItems="flex-start" container spacing={1}>
                        <Grid container direction="column" item xs={6} spacing={1}>
                            <Grid item xs={12} >
                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        width: '10rem',
                                        height: '8rem',
                                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                        p: 1,
                                        m: 1,
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                ><Avatar alt="Remy Sharp" src={MutualFunds} />
                                    <h3 className="homeScreenCardViews-avatar">{props.change ? strings.MutualFunds:strings.FrenchMutualFunds}</h3>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" item xs={6} spacing={1}>
                            <Grid item xs={12} >
                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        width: '10rem',
                                        height: '8rem',
                                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                        p: 1,
                                        m: 1,
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                ><Avatar alt="Remy Sharp" src={StocksImage} />
                                    <h3 className="homeScreenCardViews-avatar">{props.change ? strings.Stocks:strings.FrenchStocks}</h3>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" item xs={6} spacing={1}>
                            <Grid item xs={12} >
                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        width: '10rem',
                                        height: '8rem',
                                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                        p: 1,
                                        m: 1,
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                ><Avatar alt="Remy Sharp" src={FuturesOptionsImage} />
                                    <h3 className="homeScreenCardViews-avatar">{props.change ? strings.FuturesOptions : strings.FrenchFuturesOptions}</h3>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" item xs={6} spacing={1}>
                            <Grid item xs={12} >
                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        width: '10rem',
                                        height: '8rem',
                                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                        p: 1,
                                        m: 1,
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                ><Avatar alt="Remy Sharp" src={USStocksImage} />
                                    <h3 className="homeScreenCardViews-avatar">{props.change ? strings.USStocks : strings.FrenchUSStocks}</h3>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" item xs={6} spacing={1}>
                            <Grid item xs={12} >
                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        width: '10rem',
                                        height: '8rem',
                                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                        p: 1,
                                        m: 1,
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                ><Avatar alt="Remy Sharp" src={IPOImage} />
                                    <h3 className="homeScreenCardViews-avatar">{props.change ? strings.IPO : strings.FrenchIPO}</h3>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" item xs={6} spacing={1}>
                            <Grid item xs={12} >
                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        width: '10rem',
                                        height: '8rem',
                                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                        p: 1,
                                        m: 1,
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                        alignItems: 'start'
                                    }}
                                ><Avatar alt="Remy Sharp" src={FixedDepositsImage} />
                                    <h3 className="homeScreenCardViews-avatar">{props.change ? strings.FixedDeposits : strings.FrenchFixedDeposits}</h3>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
}
export default HomeScreen;