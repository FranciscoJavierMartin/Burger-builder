import React from 'react';
import classes from './Order.module.css';
import IHamburger from '../../interfaces/hamburger.interface';

interface IOrderProps{
    price: number;
    ingredients: IHamburger;
}

const order = (props: IOrderProps) => {
    const ingredients = [];

    for(let ingredientName in props.ingredients){
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span 
            className={classes.IngredientNames}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    })

    return (
    <div className={classes.Order}>
        <p>Ingredients:  Salad: (1)</p>
        <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
    </div>
)};

export default order;