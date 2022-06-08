import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import { NavItem } from "@material-tailwind/react";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";
import {Link} from 'react-router-dom'

export default function UserNavbar({currPage}) {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <Navbar color="orange" navbar>
        <NavbarContainer>
            <NavbarWrapper>
                <h1 className="text-light" style={{fontWeight: 'bolder', fontSize: '30px'}}>PANDA MALL</h1>
                <NavbarToggler
                    color="white"
                    onClick={() => setOpenNavbar(!openNavbar)}
                    ripple="light"
                />
            </NavbarWrapper>
            {/*<img class="object-scale-down h-12 w-20 ..." src="temp.png"/>*/}

            <NavbarCollapse open={openNavbar}>
                <Nav>
                    {currPage !== "Favourite" ? 
                    <NavLink href={currPage === "Favourite" ? "Home" : "Favourite"} ripple="light">
                        {currPage === "Profile" || currPage === "Home" ? (
                        <Icon name="favorite" size="xl" />
                        ) : (null)
                        }
                        {currPage === "Profile" || currPage === "Home" ? (
                            "Favourites"
                        ) : (null)}
                        
                    </NavLink>
                    : null
                    }
                    <NavLink href={currPage === "Home" ? "Profile" : "Home"} ripple="light">
                        {currPage === "Home" ? (<Icon name="account_circle" size="xl" />) : (<Icon name="home" size="xl" />)}
                        {currPage === "Home" ? ('Profle') : ('Home')}  
                    </NavLink>
                    <NavLink onClick={localStorage.removeItem("token")} href="Logout" ripple="light">
                        <Icon name="logout" size="xl" />
                        Logout
                    </NavLink>
                </Nav>
            </NavbarCollapse>
        </NavbarContainer>
    </Navbar>
  );
}