import { IReduxOrderState } from "../../interfaces/state.interface";
import { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL, PURCHASE_BURGER_START, PURCHASE_INIT, FETCH_ORDERS_START, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAIL } from "../actions/actions";

const initialState: IReduxOrderState = {
    orders: [],
    loading: false,
    purchased: false,
}

const reducer = (state = initialState, action: any): IReduxOrderState => {
    let newState:IReduxOrderState;

    switch(action.type){
        case PURCHASE_BURGER_SUCCESS:
            newState = {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat({...action.orderData, id: action.orderId}),
            };
        break;
        case PURCHASE_BURGER_FAIL:
            newState = {
                ...state,
                loading: false
            };
        break;
        case PURCHASE_BURGER_START:
            newState = {
                ...state,
                loading: true,
            }
        break;
        case PURCHASE_INIT:
            newState = {
                ...state,
                purchased: false,
            };
        break;
        case FETCH_ORDERS_START:
            newState = {
                ...state,
                loading: true
            };
            break;
        case FETCH_ORDERS_SUCCESS:
            newState = {
                ...state,
                orders: action.orders,
                loading: false,
            }
        case FETCH_ORDERS_FAIL:
            newState = {
                ...state,
                loading: false
            }
        default:
            newState = {...state}; 
    }

    return newState;
}

export default reducer;