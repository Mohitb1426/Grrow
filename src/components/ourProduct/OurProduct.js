import * as React from 'react';
import "./OurProduct.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReorderIcon from '@mui/icons-material/Reorder';
import Grid from "@mui/material/Grid";
import ourProductsImage from "../../assets/images/ourProductImages/ourProductStocks.png";

export default function OurProduct() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className='box'>
                <div className='top-2-heading'>
                    <Typography variant="body2" gutterBottom className='our-product-button'>
                        OUR PRODUCTS
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div" className='our-product-h4'>
                        Your money. Your choice.
                    </Typography>
                </div>
                <div>
                    <Box sx={{
                        width: '100%',
                        float: "left",
                        bgcolor: 'background.paper'
                    }}>
                        <Tabs value={value} onChange={handleChange} >
                            <Tab className='item1' icon={<ShowChartIcon />} iconPosition="start" label="Stocks" />
                            <Tab className='item2' icon={<ReorderIcon />} iconPosition="start" label="Mutual Funds" />
                            <Tab className='item3' icon={<AttachMoneyIcon />} iconPosition="start" label="US Stocks" />
                            <Tab className='item4' icon={<AccountBalanceIcon />} iconPosition="start" label="FDs" />
                        </Tabs>
                    </Box>
                </div>
                <div>
                    <Box sx={{
                        width: '100%',
                        float: "left",
                        bgcolor: 'background.paper'
                    }}>
                    </Box>
                </div>
            </div>
            <div>
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
                                        marginLeft:'200px',
                                    }}
                                    alt="The house from the offer."
                                    src={ourProductsImage}
                                />
                            </Grid>    
                        </Grid>
                    </Grid>    
                </div>
                <div>
                <Typography variant="h1" component="div" gutterBottom className='sidepart'>
                   Zero <span>accounts charges</span>
                 </Typography>
                </div>
            </div> 
        </div>       
            );
}
