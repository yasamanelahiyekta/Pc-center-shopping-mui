import { styled, alpha } from '@mui/material/styles';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, TextField, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AccountCircle } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { clearcartnumber } from '../../redux/action';

const Header = ({ flagg, setsearch }) => {
    const [flag, setFlag] = useState(false)
    const cartnumber = JSON.parse(localStorage.getItem("cartnumber"))?.length
    const { pathname } = useLocation()
    console.log(pathname, "location");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const profile = JSON.parse(localStorage.getItem("profile-image"))
    useEffect(() => {
    }, [flagg])
    const token = JSON.parse(localStorage.getItem("token"))
    const email = JSON.parse(localStorage.getItem("email"))
    const avatar = JSON.parse(localStorage.getItem("avatar"))
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={ anchorEl }
            anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            id={ menuId }
            keepMounted
            transformOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            open={ isMenuOpen }
            onClose={ handleMenuClose }
        >
            <MenuItem onClick={ () => {
                handleMenuClose();
                navigate("/orders")
            } }>Orders</MenuItem>
            <MenuItem onClick={ () => {
                handleMenuClose();
                navigate("/profile")
            } }>Profile</MenuItem>
            <MenuItem onClick={ () => {
                handleMenuClose();
                navigate("/setting")
            } }>Setting</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={ mobileMoreAnchorEl }
            anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            id={ mobileMenuId }
            keepMounted
            transformOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            open={ isMobileMenuOpen }
            onClose={ handleMobileMenuClose }
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={ cartnumber } color="error">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge >
                        { !token ? <LoginRoundedIcon onClick={ () => navigate("/login") } /> : <LogoutRoundedIcon onClick={ () => {
                            Swal.fire({
                                title: 'Are you sure?',
                                text: "Do you really want to logout?😟",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes,logout!'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire(
                                        'logged out!',
                                        'You are logged out.',
                                        'success'
                                    )
                                    localStorage.clear();
                                    dispatch(clearcartnumber());
                                    setFlag(l => !l)

                                }
                            });
                        } } /> }
                    </Badge>
                </IconButton>

            </MenuItem>
            <MenuItem onClick={ handleProfileMenuOpen }>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Account</p>
            </MenuItem>
        </Menu>
    );
    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar position="static" color='secondary'>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={ { display: { xs: 'none', sm: 'block' } } }
                        onClick={ () => {
                            navigate("/")
                        } }
                    >
                        Home
                    </Typography>
                    <Typography
                        sx={ { display: { xs: 'block', sm: 'none' } } }
                        onClick={ () => {
                            navigate("/")
                        } }
                    ><HomeOutlinedIcon fontSize='small' /></Typography>
                    { !token ? "" : <Typography variant='body2' style={ { marginLeft: "0.5rem" } }>{ email }</Typography> }


                    <Box className="ml-2">
                        <TextField id="outlined-basic" label="Search..."
                            size='small'
                            onChange={ (e) => setsearch(e.target.value) }
                            variant="outlined"
                            color='secondary'
                            disabled={ pathname != "/" } />
                    </Box>
                    <Box sx={ { flexGrow: 1 } } />
                    <Box sx={ { display: { xs: 'none', md: 'flex' } } }>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={ () => navigate("/cart") }>
                            <Badge badgeContent={ cartnumber } color="error">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge  >
                                { !token ? <LoginRoundedIcon onClick={ () => navigate("/login") } /> :
                                    <LogoutRoundedIcon onClick={ () => {
                                        Swal.fire({
                                            title: 'Are you sure?',
                                            text: "Do you really want to logout?😟",
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Yes, logout it!'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                Swal.fire(
                                                    'logged out!',
                                                    'You are logged out.',
                                                    'success'
                                                )
                                                localStorage.clear();
                                                dispatch(clearcartnumber());
                                                setFlag(l => !l)

                                            }
                                        });
                                    } } /> }
                            </Badge>
                        </IconButton>
                        { token &&
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={ menuId }
                                aria-haspopup="true"
                                onClick={ handleProfileMenuOpen }
                                color="inherit"
                            >
                                {/* { !token ? "" : profile ? <Avatar alt='Remy Sharp ' src={ `${profile}` } /> : <Avatar alt="Remy Sharp" src={ `${avatar}` } /> } */ }
                                { profile ? <Avatar alt='Remy Sharp ' src={ `${profile}` } /> : token && <Avatar alt="Remy Sharp" src={ `${avatar}` } /> }
                            </IconButton>
                        }
                    </Box>
                    <Box sx={ { display: { xs: 'flex', md: 'none' } } }>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={ mobileMenuId }
                            aria-haspopup="true"
                            onClick={ handleMobileMenuOpen }
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            { token && renderMobileMenu }
            { token && renderMenu }
            <ToastContainer />
        </Box>

    )
}

export default React.memo(Header)