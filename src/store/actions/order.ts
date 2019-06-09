import { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL, PURCHASE_BURGER_START, PURCHASE_INIT, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAIL, FETCH_ORDERS_START } from "./actions";
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id: string, orderData: any) => ({
    type: PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
});

export const purchaseBurgerFail = (error: any) => ({
    type: PURCHASE_BURGER_FAIL,
    error: error
});

export const purchaseBurgerStart = () => ({
    type: PURCHASE_BURGER_START,
});

export const purchaseBurger = (orderData: any) => {
    return (dispatch:any) => {
        dispatch(purchaseBurgerStart());
        axios.post("/orders.json", orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            }).catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    };
};

export const purchaseInit = () => ({
    type: PURCHASE_INIT
});

export const fetchOrdersSucces = (orders:any) => ({
    type: FETCH_ORDERS_SUCCESS,
    orders: orders,
});

export const fetchOrdersFail = (error: any) => ({
    type: FETCH_ORDERS_FAIL,
    error: error,
});

export const fetchOrdersStart = () => ({
    type: FETCH_ORDERS_START
});

export const fetchOrders = () => {
    return (dispatch:any) => {
        axios.get('/orders')
        .then(response => {
            const fetchedOrders = [];

            for(let key in response.data){
                fetchedOrders.push({
                    ...response.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSucces(fetchedOrders));
        }).catch( error => {
            dispatch(fetchOrdersFail(error));
        });
    }
}