import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function BasicMenu({ user, setUser }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogOut(){
    userService.logOut();
    setUser();
};

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Link to="/orders/new">New Order</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to="/orders">Order History</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to="" onClick={ handleLogOut }>Log Out</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
