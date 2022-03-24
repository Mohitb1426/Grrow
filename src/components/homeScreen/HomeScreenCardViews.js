import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import "../../styles.css";
import React from "react";
import { strings } from "../../globalization/String";

const HomeScreenCardViews = () => {
    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            boxShadow: 3,
                            width: "8rem",
                            height: "5rem",
                            bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "#fff"),
                            color: (theme) =>
                                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                            p: 1,
                            m: 1,
                            borderRadius: 2,
                            textAlign: "center",
                            fontSize: "0.875rem",
                            fontWeight: "700",
                        }}
                    >
                        Mutual Funds
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            boxShadow: 3,
                            width: "8rem",
                            height: "5rem",
                            bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "#fff"),color: (theme) =>
                                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                            p: 1,
                            m: 1,
                            borderRadius: 2,
                            textAlign: 'center',
                            fontSize: '0.875rem',
                            fontWeight: '700',
                        }}
                    >
                        Mutual Funds
                    </Box>
                </Grid>
            </React.Fragment>
        );
    }
    return (
        <div className='cardView-center'>
            <Grid container columns={16}>
                <Grid item xs={10}>
                    <span>{strings.FDInvest}</span><br></br>
                    <span>Trusted by Millions of Indians. Start investing Today</span><br></br>
                    <Button className="button" variant="outlined">Get Started</Button>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                boxShadow: 3,
                                width: '8rem',
                                height: '5rem',
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
                        >
                            Mutual Funds
                        </Box>
                    </Grid>
                    <FormRow />
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                boxShadow: 3,
                                width: '8rem',
                                height: '5rem',
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
                        >
                            Mutual Funds
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
}
export default HomeScreenCardViews;