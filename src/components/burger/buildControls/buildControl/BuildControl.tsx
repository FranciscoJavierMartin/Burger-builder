import React from 'react';
import classes from './BuildControl.module.css';

interface IBuildControlProps {
    label: string;
    type: string;
    added: () => void;
    removed: () => void;
    disabled: boolean;
};

// TODO: Disable button when there are not ingredients
const buildControl = (props: IBuildControlProps) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>        
        <button 
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>
            Less
        </button>
        <button 
            className={classes.More} 
            onClick={props.added}>
            More
        </button>
    </div>
);

export default buildControl;