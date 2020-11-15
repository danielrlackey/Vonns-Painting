import React from "react";

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./header.styles.js";

const Header = (props) => {

    const {classes} = props;

    return (
        <div className={classes.header}>
           <h1 className={classes.title1}>Von's</h1>
           <h1 className={classes.title2}>Painting</h1>
           <a className={classes.phoneNumber} href="tel:708-300-4024">708-300-4024</a>
        </div>
    )
};

export default (withStyles(styles, {withTheme: false})(Header));