import React, {Component} from 'react';
import {connect} from 'react-redux';
import Order from '../../components/order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler';
import * as actions from '../../store/actions/index';
import { IGlobalState } from '../../interfaces/state.interface';
import Spinner from '../../components/UI/spinner/Spinner';

interface IOrdersProps {
    onFetchOrders: () => void;
    orders: any[],
    loading: boolean;
}

class Orders extends Component<IOrdersProps,{}>{

    componentDidMount(){
        this.props.onFetchOrders();
    }

    render(){
        let content;

        if(this.props.loading){
            content = <Spinner/>            
        } else {
            content = this.props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={+order.price}/>
            ));
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state: IGlobalState) => ({
    orders: state.orders.orders,
    loading: state.orders.loading,
})

const mapDispatchToProps = (dispatch: any) => ({
    onFetchOrders: () => dispatch(actions.fetchOrders())
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));