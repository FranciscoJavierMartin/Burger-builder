import { REMOVE_INGREDIENT,ADD_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED } from "./actions";
import axios from '../../axios-orders';

export const addIngredient = (name: string) => ({
    type: ADD_INGREDIENT,
    ingredientName: name,
});

export const removeIngredient = (name: string) => ({
    type: REMOVE_INGREDIENT,
    ingredientName: name,
});

const setIngredients = (ingredients: any) => {
    return {
        type: SET_INGREDIENTS,
        ingredients: ingredients
    };
}

const fetchIngredientsFailed = () => ({
    type: FETCH_INGREDIENTS_FAILED
});

export const initIngredients = () => {
    return (dispatch:any) => {
        axios.get('')
        .then(response => {
            dispatch(setIngredients(response.data));
        }).catch( error => {
            dispatch(fetchIngredientsFailed());
        });
    };
};