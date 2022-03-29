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

export default function OurProduct() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
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
    );
}
