import React from 'react';
import classes from './Backdrop.module.css';

interface IBackdropProps {
    show: boolean;
    clicked: () => void;
};

const backdrop = (props:IBackdropProps) => (
    props.show ? 
        <div className={classes.Backdrop} onClick={props.clicked}></div> 
        : null
);

export default backdrop;