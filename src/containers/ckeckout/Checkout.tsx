import React, {Component} from 'react';
import CheckoutSummary from '../../components/UI/order/checkoutSummary/CheckoutSummary';
import IHamburger from '../../interfaces/hamburger.interface';

interface ICheckoutState {
    ingredients: IHamburger;
}

class Checkout extends Component<{},ICheckoutState>{

    state: ICheckoutState = {
        ingredients: {
            Salad: 1,
            Meat: 1,
            Cheese: 1,
            Bacon: 1
        }
    }

    render(){
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </div>
        )
    }
}

export default Checkout;