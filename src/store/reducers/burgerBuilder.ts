import {updateObject} from '../utility';
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED} from '../actions/actions';
import { IReduxBugerBuilderState } from '../../interfaces/state.interface';

const INGREDIENT_PRICES = {
    Salad: 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7
};

const initialState: IReduxBugerBuilderState = {
    ingredients: null,
    totalPrice: 0,
    error: false
};

const reducer = (state = initialState, action: any) => {
    let newState;

    switch(action.type){
        case ADD_INGREDIENT:
            newState = {
                ...state,
                ingredients: updateObject(state.ingredients, {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}),
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        break;
        case REMOVE_INGREDIENT:
            newState = {
                ...state,
                ingredients: updateObject(state.ingredients, {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}),
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        break;
        case SET_INGREDIENTS:
            newState = {
                ...state,
                ingredients: {
                    Salad: action.ingredients.salad,
                    Bacon: action.ingredients.bacon,
                    Cheese: action.ingredients.Cheese,
                    Meat: action.ingredients.Meat,
                },
                totalPrice: 0,
                error: false
            }
        break;
        case FETCH_INGREDIENTS_FAILED:
            newState = {
                ...state,
                error: true,
            }
        break;
        default:
            newState = {...state};
    }

    return newState;
};

export default reducer;