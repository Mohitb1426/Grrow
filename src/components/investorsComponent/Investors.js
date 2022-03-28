import React from "react";
import './investors.css';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InvestorImage from "../../assets/images/investorsImages/roopaImg.5575c84f.jpg";
import { strings } from "../../globalization/String";
import { Avatar } from "@material-ui/core";

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const Investors = () => {
    return (
        <div className="investors-div">
            <div className="investors-heading">
                <div style={divStyle}>
                    <span className="investor-heading-span" >{strings.CreatingInvestors} </span>
                </div>
                <span className="investor-subHeading-span">{strings.CreatingInvestorsDescription}</span>
            </div>
            <div className="investor-grid">
                <Grid alignItems="flex-start" container spacing={1}>
                    <Grid container direction="column" item xs={4} spacing={1}>
                        <Grid item xs={12} >
                            <Box
                                sx={{
                                    boxShadow: 1,
                                    width: '21rem',
                                    height: '22rem',
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                    borderRadius: 1,
                                    textAlign: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                                alt="The house from the offer."
                            >
                                <div className="investor-avatar"><Avatar alt="Remy Sharp" src={InvestorImage} /></div>
                                <div>
                                    <div>
                                        <span className="investor-description-span" >{strings.InvestorDescription} </span>
                                    </div>
                                    <span className="investor-subDescription-span">{strings.InvestorName}</span>
                                    <br/>
                                    <span className="investor-subDescription-span">{strings.InvestorTitle}</span>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" item xs={4} spacing={1}>
                        <Grid item xs={12} >
                            <Box
                                sx={{
                                    boxShadow: 1,
                                    width: '21rem',
                                    height: '22rem',
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                    borderRadius: 1,
                                    textAlign: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                                alt="The house from the offer."
                            ><div className="investor-avatar"><Avatar alt="Remy Sharp" src={InvestorImage} /></div>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" item xs={4} spacing={1}>
                        <Grid item xs={12} >
                            <Box
                                sx={{
                                    boxShadow: 1,
                                    width: '21rem',
                                    height: '22rem',
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                    borderRadius: 1,
                                    textAlign: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                                alt="The house from the offer."
                            ><div className="investor-avatar"><Avatar alt="Remy Sharp" src={InvestorImage} /></div>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default Investors;