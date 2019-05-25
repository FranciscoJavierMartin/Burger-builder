import React from 'react';
import Burger from '../../../burger/Burger';
import Button from '../../button/Button';
import classes from './CheckoutSummary.module.css';
import IHamburger from '../../../../interfaces/hamburger.interface';

interface ICheckoutSummaryProps{
    ingredients: IHamburger;
}

const checkoutSummary = (props: ICheckoutSummaryProps) => (
    <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well!</h1>
        <div style={{width: '100%', margin: 'auto'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Button 
            btnType="Danger"
            clicked >Cancel</Button>
        <Button 
            btnType="Success" 
            clicked>Continue</Button>
    </div>
);

export default checkoutSummary;