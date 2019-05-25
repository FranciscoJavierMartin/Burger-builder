import React from 'react';
import classes from './Button.module.css';

interface IButtonProps {
    children: JSX.Element | string;
    clicked: any;
    btnType: string;
};

const Button = (props: IButtonProps) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default Button;