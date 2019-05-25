import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './burgerIngredient/BugerIngredient';
import { BREAD_TOP, BREAD_BOTTOM } from '../../constants/ingredients';

export interface IBurgerProps {
    ingredients: any;
}

const burger = (props:IBurgerProps) => {

    // Transform each ingredient into a component
    let transformedIngredient: any = Object.keys(props.ingredients)
        .flatMap(igKey =>
            [...Array(props.ingredients[igKey])]
                .map((_,i) => <BurgerIngredient key={igKey+i} type={igKey}/>)
        );

    if(transformedIngredient.length === 0) {
        transformedIngredient = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={BREAD_TOP}/>
            {transformedIngredient}
            <BurgerIngredient type={BREAD_BOTTOM}/>
        </div>
    );
};

export default burger;