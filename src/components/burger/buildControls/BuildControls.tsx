import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './buildControl/BuildControl';
import { SALAD, BACON, CHEESE, MEAT } from '../../../constants/ingredients';

const controls = [
         { label: 'Salad', type: SALAD },
         { label: 'Bacon', type: BACON },
         { label: 'Cheese', type: CHEESE },
         { label: 'Meat', type: MEAT }
     ];

interface IBuildControlsProps {
    //TODO: Replace any for the correct value
    ingredientAdded: (type:string)=>void;
    ingredientRemoved: (type:string)=>void;
    disabled: any;
    price: number;
    purchasable: boolean;
    ordered: () => void;
};

const buildControls = (props:IBuildControlsProps) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                type={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>
            Order now!
        </button>
    </div>
);

export default buildControls;