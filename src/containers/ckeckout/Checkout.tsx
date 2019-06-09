import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactData from './contactData/ContactData';
import IHamburger from '../../interfaces/hamburger.interface';
import { IRouterProps } from '../../interfaces/routerProps.interface';
import { IReduxBugerBuilderState, IGlobalState } from '../../interfaces/state.interface';
import { purchaseInit } from '../../store/actions';

interface ICheckoutProps extends IRouterProps {
    ings: IHamburger;
    onInitPurchase(): () => void;
    purchased: boolean;
}

class Checkout extends Component<ICheckoutProps,{}>{

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        let summary = <Redirect to="/"/>
        if(!!this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} 
                    component={ContactData} />
            </div>);
        }
        return summary;
    }
}

const mapStateToProps = (state: IGlobalState) => ({
    ings: state.burgerBuilder.ingredients,
    purchased: state.orders.purchased
});

export default connect(mapStateToProps)(Checkout);