import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Header } from "./Header";
import MetaMask from "./Button/MetaMask";
import OnBoard from "./action/Onboard";
// import { useNavigate } from 'react-router';


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(3),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(9),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Nav() {

  const classes = useStyles();
//   const navigate = useNavigate();

//     const handleRoute = (para) => {
//         navigate(`/${para}`)
//     }

  return (
    <AppBar position="static">

      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          OpenFund
        </Typography>
        {/* <OnBoard/>   */}
        <Router>
          <div className={classes.navlinks}>
          <Link to="/raise" className={classes.link}>
                Raise Capital
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/donate" className={classes.link}>
              Donations
            </Link>
            
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            
          </div>
          </Router>
          <OnBoard/>
      </Toolbar>
    </AppBar>
  );
}
export default Nav;