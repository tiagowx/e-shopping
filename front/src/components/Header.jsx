import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../storage/main/logo.png';
import {
    Box,
    Button,
    Grid,
    Paper
} from '@mui/material';
import Cart from './Cart';


const Header = () => {

    return (
        <Grid container display="flex" alignItems="start"
           py="16px" component="header" >
            <Box sx={{
                width: 'auto',
                height: '128px',
                p: '0 100px'
            }}>
                <Link to='/'>
                    <img height="100%" src={Logo} alt="logo" />
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
            <Cart />
        </Grid>

    )
}

export default Header;