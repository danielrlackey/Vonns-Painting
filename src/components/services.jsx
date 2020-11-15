import React from "react";
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';
import {styles} from "./services.styles.js";


const Services = (props) => {

    const {classes} = props;

    return (
        <div >
            <Paper className={classes.root}>
                <h1 className={classes.title}>Services</h1>
                <ul className={classes.list}>
                    <li>Handyman</li>
                    <li>Painting</li>
                    <li>Plumbing</li>
                    <li>Pressure washing</li>
                    <li>Small Electrical</li>
                    <li>Roof Repairs</li>
                    <li>Vinyl Flooring</li>
                    <li>And Much More...</li>
                </ul>
            </Paper>
        </div>
    )
}

export default (withStyles(styles, {withTheme: false})(Services));