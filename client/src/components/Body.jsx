import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Grid } from "@material-ui/core";
// For Theme and UI
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
//changes to imports
import SecurityIcon from "@material-ui/icons/Security";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ComputerIcon from "@material-ui/icons/Computer";
import HttpIcon from "@material-ui/icons/Http";
import Main from "./main";

export default function Body() {
  const classes = styles();
  return (
    <div>
      <div>
        <div>
          <label>
            <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064" height={600} width={"100%"} />
          </label>
        </div>
        <Grid style={{padding:"90px"}} container spacing={33}>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.root}>
              <SecurityIcon className={classes.icon} />
              <Typography variant="h5" component="h2">
                Security
              </Typography>
              <Typography variant="body2" component="p">
                We are using the latest security protocols to protect your
                funds.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.root}>
              <EventNoteIcon className={classes.icon} />
              <Typography variant="h5" component="h2">
                Transparency
              </Typography>
              <Typography variant="body2" component="p">
                We are using the latest security protocols to protect your
                funds.
              </Typography>
              
            </div>
            
          </Grid>
        </Grid>
        <ThemeProvider theme={theme}>
          <div className={classes.wrapper}>
            <Typography
              variant="h4"
              className={classes.bigSpace}
              color="black"
            >
              We are passionate to Help
            </Typography>
            <Typography
              variant="h5"
              className={classes.littleSpace}
              color="secondary"
            >
              let's help <b style={{color: 'ActiveBorder'}}> Each others</b>
            </Typography>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#010004",
    },
    secondary: {
      main: "#1ddc36",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});
