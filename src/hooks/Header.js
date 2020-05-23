// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Context from '../utils/context';

// const Header = () => {
//   const context = useContext(Context)

//     return(
//         <div>
//           <Link to='/' style={{padding: '5px'}}>
//             Home
//           </Link>
//           <Link to='/profile' style={{padding: '5px'}}>
//             Profile
//           </Link>
//           <Link to='/hooksform' style={{padding: '5px'}}>
//             Hooks Form
//           </Link>
//           <Link to='/hookscontainer' style={{padding: '5px'}}>
//             Hooks Container
//           </Link>
//           <Link to='/privateroute' style={{padding: '5px'}}>
//             Private Route
//           </Link>
//           {!context.authState
//             ? <button onClick={() => context.authObj.login()}>Login</button>
//             : <button onClick={() => context.authObj.logout()}>Logout</button>
//           }
//         </div>
//   )};


// export default Header;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button,Tabs,Tab} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit" component={Link} to='/'>Home</Button>
    <Button color="inherit">Product</Button>
    <Button color="inherit"  component={Link} to='/login' >Login</Button>
  </Toolbar>
  </AppBar>

  )
}

export default Header
