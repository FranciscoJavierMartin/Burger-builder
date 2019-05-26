import React, {Component} from 'react';
import Order from '../../components/order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler';

interface IOrdersState{
    loading: boolean;
    orders: any[];
}

class Orders extends Component<{},IOrdersState>{

    state: IOrdersState = {
        orders: [],
        loading: true
    }

    componentDidMount(){
        axios.get('/orders')
            .then(response => {
                const fetchedOrders = [];

                for(let key in response.data){
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }

            }).catch( error => {

            }).finally(() => {
                this.setState({loading: false});
            })
    }

    render(){
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}/>
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);