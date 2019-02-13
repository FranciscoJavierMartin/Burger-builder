import React from 'react';
import classes from './BurgerIngredient.module.css';
import Ingredients from '../../../enums/ingredients';

interface IBurgerIngredientProps {
    type: Ingredients;
}

const burgerIngredient = (props: IBurgerIngredientProps) => {
    let ingredient = null;

    switch(props.type) {
        case Ingredients.BreadBottom:
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case Ingredients.BreadTop:
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case Ingredients.Meat:
            ingredient = <div className={classes.Meat}></div>;
            break;
        case Ingredients.Cheese:
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case Ingredients.Salad:
            ingredient = <div className={classes.Salad}></div>;
            break;
        case Ingredients.Bacon:
            ingredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

export default burgerIngredient;