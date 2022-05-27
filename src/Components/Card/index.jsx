import React from 'react';
import {makeStyles} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useSelector,useDispatch} from "react-redux";
import { AddToCart } from '../../features/Slicer';

const Card = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state);
    // const [add, setAdd] = useState();
    // const addToCart=()=>{
    //     return 
    // }
    const classes = useStyles()
    const { img, img1, title, des ,link} = props.menuItem;
    
  return <>
<div className={classes.outer}>
<article className={classes.card_contain}>
      <div className={classes.a}>
          <img src={img} alt=" v" className={classes.l_image}/>
          <button id="heartt" className={classes.heart}>
          <FavoriteIcon style={{color:"red", cursor: "pointer"}} />
          </button>
      </div>
      <div className={classes.b}>
        <img src={img1} alt="hello" className={classes.card_img}/>
      </div>
      <div className={classes.c}>
          <button className={classes.count}  onClick={() => {
                dispatch(AddToCart(props.menuItem));
              }}
              >
            Order</button>
      </div>
      
      <div className={classes.d}>
          
          <h3 className={classes.tit}>{title}</h3>
          <p style={{opacity: "0.7"}} className={classes.pp}>{link}</p>
          <p style={{opacity: "0.7"}} className={classes.pp}>{des}</p>
      </div>
      
      </article>
      </div>
  </>;
};
export default Card;
const useStyles = makeStyles({
    outer: {
        padding:"0",
        margin:"0"
    },
    tit: {
        margin: 10
    },
    pp: {
        margin: 5,
    },
    card_contain: {
        width: "95%",
        border: "2px solid #033b55",
        cursor: "pointer",
        background: "#081a22",
        color: "white",
        borderRadius: "5px",
        '&:hover': {
            cursor: "pointer",      
        }, 
    },
    l_image: {
        width: "12%",
        height: "auto",
        transition: "500ms", 
    },
    heart: {
        color: "red",
        background: "#081a22",
        border: "none",
    },
    a: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
    },
    b: {
        display: "flex",
        justifyContent: "center",
        '&:hover': {
            transform: "scale(1.1)",
            transition: "0.8s",
            }
    },
    c: {
        textAlign: "center",
    },
    count: {
        width: "90%",
        height: 30,
        borderRadius: "10px",
        border: "2px solid #002d42",
        color: "white",
        backgroundColor: "#081a22",
        margin: "20px 0px",
        '&:hover': {
            color: "#081a22",
            backgroundColor: "white",
        },
    },
    card_img: {
        width:"300px",
        height: "280px",
        border: "2px solid #002d42",
    },
    p : {
        padding: 0,
        margin: 0
    }

})