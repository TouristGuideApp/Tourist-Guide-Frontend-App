import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import LuggageIcon from '@mui/icons-material/Luggage';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {useState} from "react";
import LoginComponent from "./loginComponent";
import SignUpComponent from "./signupComponent"
import { useEffect } from "react";
import {useRouter} from "next/router";
import Link from "next/link";

function NavigationBar() {
    const router = useRouter()
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [displayLoginDialog, setDisplayLoginDialog] = useState(false)
    const [displaySignupDialog, setDisplaySignupDialog] = useState(false)
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    useEffect(() => {
        if(typeof window !== "undefined"){
            if(localStorage.getItem("userLoggedIn")){
                setUserLoggedIn(true)
            } else {
                setUserLoggedIn(false)
            }
        }
    }) 

    function handleLogout(){
        localStorage.removeItem("userJWT")
        localStorage.removeItem("userLoggedIn")
        location.href = '/'
    }

    function loginAftereffects(){
        handleCloseUserMenu()
        setDisplayLoginDialog(false)
    }

    function signUpAftereffects(){
        handleCloseUserMenu()
        setDisplaySignupDialog(false)
    }

    return (
        <>        
        <AppBar position="static" style={{backgroundColor:"transparent", border: "none", boxShadow: "none"}}>
            <Container maxWidth="string">
                <Toolbar disableGutters>
                    <LuggageIcon
                        sx={{display: {xs: "none", md: "flex"}, mr: 1, color: "white", zIndex: 2}}
                    />

                    <Link href={"/"}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: {xs: "none", md: "flex"},
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                fontFamily: "Ubuntu",
                                textDecoration: "none",
                                color: "white",
                                zIndex: 2,
                                cursor: "pointer"
                            }}
                        >
                            TourGuide
                        </Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "none", md: "flex"},
                            color: 'white', zIndex: 2
                        }}
                    />
                    <Box sx={{flexGrow: 0, color: 'white', zIndex: 2}}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{p: 0}}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: "45px"}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                        {!userLoggedIn &&   
                            <>
                                <MenuItem
                                    key={0}
                                    onClick={() => setDisplayLoginDialog(true)}
                                >
                                    <Typography textAlign="center">
                                        {"Log In"}
                                    </Typography>
                            </MenuItem>
                            <MenuItem
                                    key={1}
                                    onClick={() => setDisplaySignupDialog(true)}
                                >
                                    <Typography textAlign="center">
                                        {"Sign Up"}
                                    </Typography>
                            </MenuItem>
                            </>
                        }
                        {userLoggedIn &&
                            <>
                                <MenuItem
                                    key={0}
                                    onClick={() => router.push("/collections").then()}
                                >
                                    <Typography textAlign="center">
                                        {"Collections"}
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    key={2}
                                    onClick={handleLogout}
                                >
                                    <Typography textAlign="center">
                                        {"Log Out"}
                                    </Typography>
                                </MenuItem>
                            </>
                        }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        {displayLoginDialog &&
            <>
                <LoginComponent
                    onClose={() => setDisplayLoginDialog(false)}
                    onLoginSuccess={loginAftereffects}
                />
            </>
        }
        {displaySignupDialog &&
            <>
                <SignUpComponent
                    onClose={() => setDisplaySignupDialog(false)}
                    onSignUpSuccess={signUpAftereffects}
                />
            </>
        }
        
        </>
    );
}

export default NavigationBar;
