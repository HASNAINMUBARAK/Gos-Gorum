import React from "react";
import { useState } from "react";
import { Box } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import { Buttons } from "../../Units/buttons";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core";
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';

const HamBurger = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  
const {cartData:{selection}} = useSelector((state)=>state);
 
  return (
    <div className={classes.RealHamburger}>
      <IconButton
        className={classes.hamBurgerBtn}
        edge="start"
        style={{ color: "white" }}
        fontSize="large"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {}}
      >
        <Box p={2}>
          {open ? (
            <KeyboardArrowRightIcon
              variant="contained"
              color="#22bcd0"
              className={classes.vs}
              fontSize="large"
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <KeyboardArrowLeftIcon
              variant="contained"
              color="#22bcd0"
              fontSize="large"
            />
          )}
        </Box>
        <hr />
        <List>
          <ListItem className={classes.ListItem}>
            <Box className={classes.HeaderLinks}>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                Platform
                </Buttons>
              </Box>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Pricing
                </Buttons>
              </Box>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Enterprice
                </Buttons>
              </Box>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Customers
                </Buttons>
              </Box>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Blog
                </Buttons>
              </Box>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Docs         
                </Buttons>
              </Box>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Login
                </Buttons>
              </Box>
              <Box>
                <Buttons
                  type="button"
                  buttonStyle="btn--black--solid"
                  buttonSize="btn--medium"
                >
                  Signup
                </Buttons>
              </Box>
              <Box>
                <button className={classes.btn}> 
              <Badge badgeContent={selection.length}><ShoppingCartIcon /></Badge>
              </button>
              </Box>
            </Box>
          </ListItem>
        </List>
        <Divider />
      </SwipeableDrawer>
    </div>
  );
};
export default HamBurger;
const useStyles = makeStyles((theme) => ({
  HeaderItems: {
    cursor: "pointer",
    padding: "10px",
    "&:hover": {
      color: "#6605B8",
    },
  },
  vs: {
    color: "#22bcd0"
  },
  hamBurgerBtn: {
    backgroundColor: "#22bcd0",
    color: "#000",
  },
  RealHamburger: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      color: "#000",
    },
  },
  ListItem: {
    width: "300px",
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
  },
  HeaderLinks: {
    width: "300px",
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  btn: {
    color: "white",
    backgroundColor: "#2250f4",
    borderRadius: 5,
    padding: "7px 22px",
    border: "none",
    height: 40,
    fontWeight: 700
  },
}));