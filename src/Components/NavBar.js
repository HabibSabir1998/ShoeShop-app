import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  link: {
    marginRight: theme.spacing(1),
  },
}));

 const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Shoe Store
          </Typography>
          <Button color="inherit" className={classes.link} variant="outlined"><Link style={{color:"whitesmoke"}}to="/">Home</Link></Button>
          <Button color="inherit" className={classes.link} variant="outlined"><Link style={{color:"whitesmoke"}} to="/about"> About </Link></Button>
          <Button color="inherit" className={classes.link} variant="outlined"><Link style={{color:"whitesmoke"}} to="/product"> Product </Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;

        // <div>
        //     <Link to="/">Home</Link>
        //     <Link to="/about"> About </Link>
        //     <Link to="/product"> Product </Link>
        // </div>