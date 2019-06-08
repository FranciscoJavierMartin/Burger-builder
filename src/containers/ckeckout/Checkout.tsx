import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactData from './contactData/ContactData';
import IHamburger from '../../interfaces/hamburger.interface';
import { IRouterProps } from '../../interfaces/routerProps.interface';
import { IGlobalState } from '../../interfaces/state.interface';

interface ICheckoutProps extends IRouterProps {
    ings: IHamburger;
    price: number;
}

class Checkout extends Component<ICheckoutProps,{}>{

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} 
                    component={ContactData} />
            </div>
        )
    }
}

const mapStateToProps = (state: IGlobalState) => ({
    ings: state.ingredients,
    price: state.totalPrice,
});

export default connect(mapStateToProps)(Checkout);