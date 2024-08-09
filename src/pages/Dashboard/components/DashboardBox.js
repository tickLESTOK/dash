import React, { useState } from "react";
import Button from "@mui/material/Button";
import { HiOutlineDotsVertical } from "react-icons/hi";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Ensure this line is included to import the CSS

const DashboardBox = (props) => {
   
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    };

  return (
    
    <Button
      className={`dashboardBox ${props.wid ? 'boxxx' : ''}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
      }}
    >
      

      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-white">Total Users</h4>
          <span className="text-white">277</span>
        </div>
        <div className="ml-auto">
          {props.icon ? (
            <span span className="icon">
              {props.icon ? props.icon : ""}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="d-flex align-items-center rand">
        <h6 className="text-white mb-0 mt-0">Last Month</h6>
        
        <div className="ml-auto">
          <Button className="ml-auto toggeleIcon ssasa" onClick={handleClick}>
          <HiOutlineDotsVertical />
        </Button>
        <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        
          <MenuItem  onClick={handleClose}>
            Last Day
          </MenuItem>
          <MenuItem  onClick={handleClose}>
           Last Week
          </MenuItem>
          <MenuItem  onClick={handleClose}>
            Last Month
          </MenuItem>
          <MenuItem  onClick={handleClose}>
            Last Year
          </MenuItem>
     
      </Menu>
        </div>
        
      </div>
    </Button>
  );
};

export default DashboardBox;
