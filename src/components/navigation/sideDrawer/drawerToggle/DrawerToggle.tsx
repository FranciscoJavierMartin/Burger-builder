import React from 'react';
import classes from './DrawerToggle.module.css';

interface IDrawerToggleProps {
    clicked: any;
}

const drawerToggle = (props: IDrawerToggleProps) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;