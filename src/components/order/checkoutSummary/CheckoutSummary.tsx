import React from 'react';
import Burger from '../../../burger/Burger';
import Button from '../../button/Button';
import classes from './CheckoutSummary.module.css';
import IHamburger from '../../../../interfaces/hamburger.interface';

interface ICheckoutSummaryProps{
    ingredients: IHamburger;
    checkoutCancelled: () => void;
    checkoutContinued: () => void;
}

const checkoutSummary = (props: ICheckoutSummaryProps) => (
    <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well!</h1>
        <div style={{width: '100%', margin: 'auto'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Button 
            btnType="Danger"
            clicked={props.checkoutCancelled} >Cancel</Button>
        <Button 
            btnType="Success" 
            clicked={props.checkoutContinued}>Continue</Button>
    </div>
);

export default checkoutSummary;