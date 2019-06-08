import IHamburger from "./hamburger.interface";

export interface IGlobalState {
    ingredients: IHamburger;
    totalPrice: number;
    error: boolean;
}