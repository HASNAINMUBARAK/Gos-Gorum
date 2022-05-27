import React from 'react'
import {Grid, makeStyles} from "@material-ui/core"
import logo from "../../Assets/Images/logo.PNG"
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HamBurger from '../humberger';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
const classes = useStyles()
const {cartData:{selection}} = useSelector((state)=>state);
 

  return (
    <>
    <Grid container className={classes.container}
     display="flex"
     justifyContent="space-evenly"
    >
        <Grid item  lg={1} md={2} sm={2} className={classes.grid1}>
              <Link to="/">
              <img src={logo} alt=" " style={{width:"150px"}}/>
              </Link>
           
        </Grid>
        <Grid item container  lg={5} md={5} sm={5} className={classes.grid2}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        >
            
              <Link to="/About" className={classes.dropdown}>Platform <ExpandMoreIcon/></Link> 
              <a href="a" target="_blank" className={classes.dropdown}> Enterprice <ExpandMoreIcon/></a> 
              <a href="a" target="_blank" className={classes.anchors}> Customers</a>  
              <Link to="/" className={classes.anchors}> Docs</Link> 
             
        </Grid>
        <Grid item container lg={3} md={3} sm={3} className={classes.grid3}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center" >
              <a href="a" target="_blank" className={classes.search}><SearchIcon/></a> 
              <a href="a" target="_blank" className={classes.anchors}> Hire an Expert</a> 
              <a href="a" target="_blank" className={classes.anchors}> Contact Sales</a> 
              <a href="a" target="_blank" className={classes.anchors}> Log in</a> 
        </Grid>
        <Grid item container lg={1} md={1} sm={1} className={classes.grid4}
        display="flex"
        alignItems="center">
            <Link to="/cart">
            <button className={classes.btn}>
              <Badge badgeContent={selection.length}><ShoppingCartIcon /></Badge></button>
              </Link>
        </Grid>
        <Grid item className={classes.drawer}>
    <HamBurger/>
    </Grid>
    </Grid>
    </>
  )
}
const useStyles = makeStyles((theme)=>({
  container: {
    margin:"20px 0px",
    [theme.breakpoints.down("md")]: 
    {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: 
    {
      justifyContent: "space-between",
    }
  },
  grid1: {
    paddingLeft: 20,
  },
  grid2: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  },
  grid3: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    }
  },
  grid4: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  },
  
  drawer: {
    paddingRight: "20px",
    [theme.breakpoints.down("sm")]:{
      order:2,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    }
  },
  
  image: {
    width: "100px"
  },
  anchors: {
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    }
  },
  dropdown: {
    fontWeight: 600,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "underline",
    }
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
}))
export default Navbar