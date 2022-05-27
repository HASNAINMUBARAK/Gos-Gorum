import React from "react";
import { makeStyles } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
const useStyles = makeStyles((theme) => ({
  foottt: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  foot: {
    display: "flex",
    justifyContent: "space-between",
    margin: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      margin: "0px",
    },
  },
  one: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  signin: {
    display: "flex",
  },
  two: {
    "& ul": {
      listStyle: "none",
    },
    "& a": {
      color: "white",
      opacity: "0.7",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  three: {
    "& ul": {
      listStyle: "none",
    },
    "& a": {
      color: "white",
      opacity: "0.7",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  four: {
    "& ul": {
      listStyle: "none",
    },
    "& a": {
      color: "white",
      opacity: "0.7",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  foott: {
    marginLeft: "40px",
    [theme.breakpoints.down("sm")]: {
      display: "center",
      alignItems: "center",
      margin: 0,
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#22bcd0" }}>
      <hr
        style={{
          margin: "40px 0px",
          border: "none",
          height: "2px",
          padding: "0.8px 0px",
          background: "linear-gradient(45deg, transparent 10%, #002c40)",
        }}
      />

      <div className={classes.foottt}>
        <div className={classes.foot}>
          <div className={classes.one}>
            <h4 style={{ padding: "20px 0px" }}>Get the latest update</h4>
            <div className={classes.signin}>
              <input></input>
              <button>Signin</button>
            </div>
          </div>
          <div className={classes.two}>
            <h3>Community</h3>
            <ul>
              <li>
                <a href="/about"> About us</a>
              </li>
              <li>
                <a href="/about">How it work </a>
              </li>
              <li>
                <a href="/about"> Support</a>
              </li>
              <li>
                <a href="/about"> Become a partner</a>
              </li>
            </ul>
          </div>
          <div className={classes.three}>
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="/about"> About us</a>
              </li>
              <li>
                <a href="/about">How it work </a>
              </li>
              <li>
                <a href="/about"> Support</a>
              </li>
              <li>
                <a href="/about"> Become a partner</a>
              </li>
            </ul>
          </div>
          <div className={classes.four}>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="/about">Contact No: 03454548340</a>
              </li>
              <li>
                <a href="/about">Email: GashGiran@gmail.com</a>
              </li>
              <li>
                <a href="/about">
                  Location: Office#205, 2nd floor, Rawal Souq Plaza,Rwp
                </a>
              </li>
              <li>
                <a href="/about">Opening Hours: 24 hours</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.foott}>
          <h5 style={{ padding: "20px 0px" }}>Join the Community</h5>
          <div style={{ margin: "20px 0px" }}>
            <TwitterIcon style={{ padding: "0px 10px" }} />
            <InstagramIcon style={{ padding: "0px 10px" }} />
            <FacebookIcon style={{ padding: "0px 10px" }} />
            <TelegramIcon style={{ padding: "0px 10px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
