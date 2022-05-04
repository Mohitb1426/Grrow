import React from "react";
import './articles.css';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BlogOne from "../../assets/images/articlesImages/blog1.webp";
import BlogTwo from "../../assets/images/articlesImages/blog2.webp";
import BlogThree from "../../assets/images/articlesImages/blog3.webp";
import { strings } from "../../globalization/String";

interface IMyProps {
    change: boolean;
}

const ArticlesComponent = (props: IMyProps) => {
    return (
        <div >
            <div className="keepLearning-keepGrowing-div">
                <h1>{props.change ? strings.KeepLearningKeepGrowing : strings.FrenchKeepLearningKeepGrowing}</h1></div>
            <div className="keeplearn-grid">
                <Grid alignItems="flex-start" container spacing={1}>
                    <Grid container direction="column" item xs={4} spacing={1}>
                        <Grid item xs={12} >
                            <Box
                                component="img"
                                sx={{
                                    boxShadow: 1,
                                    width: '20rem',
                                    height: '16rem',
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                    borderRadius: 5,
                                    textAlign: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                                alt="The house from the offer."
                                src={BlogOne}
                            />
                        </Grid>
                        <h3 style={{ "width": "15em", "marginLeft": "4em" }} className="grid-text">{props.change ? strings.SelectStocks : strings.FrenchSelectStocks}</h3>
                    </Grid>
                    <Grid container direction="column" item xs={4} spacing={1}>
                        <Grid item xs={12} >
                            <Box
                                component="img"
                                sx={{
                                    boxShadow: 1,
                                    width: '20rem',
                                    height: '16rem',
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                    borderRadius: 5,
                                    textAlign: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                                alt="The house from the offer."
                                src={BlogTwo}
                            />
                        </Grid>
                        <h3 style={{ "width": "15em", "marginLeft": "4em" }} className="grid-text">{props.change ? strings.GuideMutualFunds : strings.FrenchGuideMutualFunds}</h3>
                    </Grid>
                    <Grid container direction="column" item xs={4} spacing={1}>
                        <Grid item xs={12} >
                            <Box
                                component="img"
                                sx={{
                                    boxShadow: 1,
                                    width: '20rem',
                                    height: '16rem',
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                    borderRadius: 5,
                                    textAlign: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                                alt="The house from the offer."
                                src={BlogThree}
                            />
                        </Grid>
                        <h3 style={{ "width": "15em", "marginLeft": "4em" }} className="grid-text">{props.change ? strings.DiversifyVolatility : strings.FrenchDiversifyVolatility}</h3>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default ArticlesComponent;