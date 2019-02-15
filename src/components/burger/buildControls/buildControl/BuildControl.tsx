import React from 'react';
import classes from './BuildControl.module.css';

interface IBuildControlProps {
    label: string;
    type: string;
    added: () => void;
    removed: () => void;
    disabled: boolean;
};

const buildControl = (props: IBuildControlProps) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        // TODO: Disable button when there are not ingredients
        <button 
            className={classes.Less}
            onClick={props.added}
            disabled={props.disabled}>
            Less
        </button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;