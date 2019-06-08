import { IAction } from './../interfaces/action.interface';
import { ADD_INGREDIENT, REMOVE_INGREDIENT} from './actions';
import { IGlobalState } from '../interfaces/state.interface';

const INGREDIENT_PRICES = {
    Salad: 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7
};

const initialState: IGlobalState = {
    ingredients: {
        Salad: 0,
        Bacon: 0,
        Cheese: 0,
        Meat: 0
    },
    totalPrice: 0
};

const reducer = (state = initialState, action: IAction) => {
    let newState;

    switch(action.type){
        case ADD_INGREDIENT:
            newState = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        break;
        case REMOVE_INGREDIENT:
                newState = {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                    },
                    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
                }
        break;
        default:
            newState = {...state};
    }

    return newState;
};

export default reducer;