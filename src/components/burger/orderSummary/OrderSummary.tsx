import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/button/Button';

interface IOrderSummaryProps {
    ingredients: any;
    purchaseCancelled: () => void;
    purchaseContinued: () => void;
    price: number;
}

const orderSummary = (props: IOrderSummaryProps) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey =>
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>: {props.ingredients[igKey]}
            </li>
        );

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue!</Button>
        </Aux>
    )
};

export default orderSummary;