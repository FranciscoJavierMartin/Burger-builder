import React from 'react';
import classes from './BurgerIngredient.module.css';

interface IBurgerIngredientProps {
    type: Ingredient;
}

const burgerIngredient = (props: IBurgerIngredientProps) => {
    let ingredient = null;

    switch(props.type) {
        case Ingredient.BreadBottom:
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case Ingredient.BreadTop:
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case Ingredient.Meat:
            ingredient = <div className={classes.Meat}></div>;
            break;
        case Ingredient.Cheese:
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case Ingredient.Salad:
            ingredient = <div className={classes.Salad}></div>;
            break;
        case Ingredient.Bacon:
            ingredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

export default burgerIngredient;