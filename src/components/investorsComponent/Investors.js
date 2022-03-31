import React from "react";
import './investors.css';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InvestorImage from "../../assets/images/investorsImages/roopaImg.5575c84f.jpg";
import { strings } from "../../globalization/String";
import { Avatar } from "@material-ui/core";
import { Rating } from "@mui/material";

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const Investors = (props) => {
    return (
        <div className="investors-div">
            <div className="investors-heading">
                <div style={divStyle}>
                    <span className="investor-heading-span" >{props.change ? strings.CreatingInvestors : strings.FrenchCreatingInvestors} </span>
                </div>
                <span className="investor-subHeading-span">{props.change ? strings.CreatingInvestorsDescription : strings.FrenchCreatingInvestorsDescription}</span>
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
                                <div className="investor-avatar">
                                    <div style={divStyle}>
                                        <Avatar className="investor-avatar-img" alt="Remy Sharp" src={InvestorImage} />
                                        <Rating value={4} className="investor-rating" name="simple-controlled" />
                                    </div></div>
                                <div>
                                    <div className="investor-description-span">
                                        <p>{props.change ? strings.InvestorDescription : strings.FrenchInvestorDescription} </p>
                                        <p className="invertor-pragraph">{props.change ? strings.InvestorName : strings.FrenchInvestorName} </p>
                                        <p className="invertor-pragraph-second">{props.change ? strings.InvestorTitle : strings.FrenchInvestorTitle} </p>
                                    </div>
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
                            >
                                <div className="investor-avatar">
                                    <div style={divStyle}>
                                        <Avatar className="investor-avatar-img" alt="Remy Sharp" src={InvestorImage} />
                                        <Rating value={3} className="investor-rating" name="simple-controlled" />
                                    </div></div>
                                <div>
                                    <div className="investor-description-span">
                                        <p>{props.change ? strings.InvestorDescription : strings.FrenchInvestorDescription} </p>
                                        <p className="invertor-pragraph">{props.change ? strings.InvestorName : strings.FrenchInvestorName} </p>
                                        <p className="invertor-pragraph-second">{props.change ? strings.InvestorTitle : strings.FrenchInvestorTitle} </p>
                                    </div>
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
                            >
                                <div className="investor-avatar">
                                    <div style={divStyle}>
                                        <Avatar className="investor-avatar-img" alt="Remy Sharp" src={InvestorImage} />
                                        <Rating value={5} className="investor-rating" name="simple-controlled" />
                                    </div></div>
                                <div>
                                    <div className="investor-description-span">
                                        <p>{props.change ? strings.InvestorDescription : strings.FrenchInvestorDescription} </p>
                                        <p className="invertor-pragraph">{props.change ? strings.InvestorName:strings.FrenchInvestorName} </p>
                                        <p className="invertor-pragraph-second">{props.change ? strings.InvestorTitle : strings.FrenchInvestorTitle} </p>
                                    </div>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default Investors;