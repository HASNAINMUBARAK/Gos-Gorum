import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, MenuItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { remove } from "../../features/Slicer";

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    cartData: { selection },
  } = useSelector((state) => state);
  /// remove
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      {Boolean(selection.length) && (
        <button style={{ width: "200px", height: "30px" }}>
          Total Items: <Badge badgeContent={selection.length}></Badge>
        </button>
      )}
      {selection.map((menuItem, i) => {
        return (
          <div key={i} className={classes.cart}>
            <h2>{menuItem.title}</h2>
            <p>{menuItem.link}</p>
            <button onClick={() => handleRemove(menuItem.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  cart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
}));
export default Cart;
