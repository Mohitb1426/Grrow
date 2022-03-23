import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const CardViews = () => {
    return (
        <div>
            <Grid container>
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
                  Stocks
                </Box>
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
                  Stocks
                </Box>
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
                  Stocks
                </Box>
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
                  Stocks
                </Box>
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
                  Stocks
                </Box>
            </Grid>
        </div>
    );
}
export default CardViews;