import React from 'react'
import "./Header.css";
import logo from '../Images/flipkart.jpg'
import { Search, ShoppingCart } from '@mui/icons-material';
import { Button } from '@mui/material';
import FadeMenu from './PopUpMenu';

const Headers = () => {
  return (
    <div className="header">
      <div className="logodiv">
        <img style={{ "width": "20%", "height": "50px" }} src={logo} alt="" className="logo" />
        <div className="inputdiv">
          <input type="text" className="inputarea" placeholder="Search For products, brands and more" style={{ "paddingLeft": "15px" }} />
          <Search style={{ "paddingRight": "5px" }} />
        </div>
      </div>
      <div className="login">
        <Button>LongIn</Button>
      </div>
      <div className="after">
        <a href="google.com" style={{ "textDecoration": "none" }}>
          <span style={{ "color": "white" }}>Become A Seller</span>
        </a>


        <div className="dropdown">
          <FadeMenu/>
        </div>


        <div><ShoppingCart style={{ "color": "white" }} />
          <span style={{ "color": "white" }}>Cart</span>
        </div>
      </div>

    </div>
  )
}

export default Headers