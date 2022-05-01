import React from 'react';
import { Link } from 'react-router-dom';
import {
    Avatar,
    Box,
    Button,
    Grid,
    Paper
} from '@mui/material';


const Header = () => {

    return (
        <Grid container display="flex" alignItems="start"
            justifyContent="start"  py="16px" component="header" >
            <Box sx={{
                width: 'auto',
                height: '128px',
                p:'0 100px'
            }}>
                <Link to='/'>
                    <Avatar height="100%" src="./imgs/logo.png" />
                </Link>
            </Box>
            <Paper sx={{
                width: '720px',
                height: '120px',
            }}>
                
            </Paper>
            <Box >
                <Link to="/">
                    <Button>Home</Button>
                </Link>
                <Link to="/contato">
                    <Button>Contato</Button>
                </Link>
            </Box>
        </Grid>

    )
}

export default Header;