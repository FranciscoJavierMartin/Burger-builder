import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './burgerIngredient/BugerIngredient';
import Ingredient from '../../enums/ingredients.enum';

const burger = (props:any) => {
    const transformedIngredient = Object.keys(props.ingredients)
        .map(igKeyString => {
            const igKey:Ingredient = Ingredient[igKeyString.toString()];
            // const igKey:Ingredient = Ingredient.Meat;
            const value = props.ingredients[igKey];

            return [...Array(value)].map((_,i) => {
                <BurgerIngredient key={igKeyString+i} type={igKey}/>
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={Ingredient.BreadTop}/>
            {transformedIngredient}
            <BurgerIngredient type={Ingredient.BreadBottom}/>
        </div>
    );
};

export default burger;