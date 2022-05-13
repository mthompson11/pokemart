import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from './logo.png'
import './AppBar.css'
import { useNavigate, Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';

const ResponsiveAppBar = ({ itemQty, setUser }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate()

  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to='/'>
              <img src={ logo } alt='' />
            </Link>
          </Box>
          <Box sx={{display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem onClick={() => {
                  navigate('/')
                  handleCloseNavMenu()
                }}>
                  <Typography textAlign="center">Shop</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Link to='/'>
              <img src={ logo } alt='' />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={() => navigate('/')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Shop
              </Button>
              <Button
                onClick={handleLogOut}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Logout
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
            onClick={() => navigate('/orders/cart')}
            sx={{ my: 2, color: 'white', display: 'block' }}
            >
            { `Cart(${ itemQty })` }
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

