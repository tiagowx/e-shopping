import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../storage/main/logo-lumar.png';
import Lampada from '../storage/main/logo-210x280.png';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const pages = [{
    name: 'Home',
    url: '/'
},
{
    name: 'Contato',
    url: '/contato'
}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{
            bgcolor: 'secondary.main',

        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/">
                        <Box
                            display='flex'
                            variant="p"
                            component="h1"
                            sx={{
                                height: '64px',
                                paddingX: '32px',
                                padding: '4px',
                                marginY: '4px',
                                marginX: '64px',
                                borderRadius: 2
                            }}>
                            <img height="auto" src={Logo} alt="Logo" />
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name + 'small'} onClick={handleCloseNavMenu}>
                                    <Link to={page.url}>
                                        <Button >{page.name}</Button>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link key={page.name + 'mobile'} to={page.url}>
                                <Button 
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 0, color:'#fff', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Cart />
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{
                                p: 1,
                            }}>
                                <Avatar alt="Remy Sharp" src={Lampada} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '48px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
