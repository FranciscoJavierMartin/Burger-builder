import React from 'react';
import classes from './BurgerIngredient.module.css';
import { BREAD_BOTTOM, BREAD_TOP, MEAT, CHEESE, SALAD, BACON } from '../../../constants/ingredients';

interface IBurgerIngredientProps {
    type: string;
}

const burgerIngredient = (props: IBurgerIngredientProps) => {
    let ingredient = null;

    switch(props.type) {
        case BREAD_BOTTOM:
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case BREAD_TOP:
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case MEAT:
            ingredient = <div className={classes.Meat}></div>;
            break;
        case CHEESE:
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case SALAD:
            ingredient = <div className={classes.Salad}></div>;
            break;
        case BACON:
            ingredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

export default burgerIngredient;