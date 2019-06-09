import IHamburger from "./hamburger.interface";

export interface IReduxBugerBuilderState {
    ingredients: IHamburger;
    totalPrice: number;
    error: boolean;
}

export interface IReduxOrderState {
    orders: any[],
    loading: boolean;
    purchased: boolean;
}

export interface IGlobalState {
    orders: IReduxOrderState,
    burgerBuilder: IReduxBugerBuilderState
}