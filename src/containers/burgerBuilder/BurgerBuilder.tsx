import React, { Component } from "react";
import {connect } from 'react-redux';
import Aux from "../../hoc/Aux";
import Burger from "../../components/burger/Burger";
import IHamburger from "../../interfaces/hamburger.interface";
import BuildControls from "../../components/burger/buildControls/BuildControls";
import Modal from "../../components/UI/modal/Modal";
import Spinner from '../../components/UI/spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';

import { BACON, SALAD, MEAT, CHEESE } from "../../constants/ingredients";
import OrderSummary from "../../components/burger/orderSummary/OrderSummary";
import axios from '../../axios-orders';
import { IRouterProps } from "../../interfaces/routerProps.interface";
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../../store/actions";
import { IGlobalState } from "../../interfaces/state.interface";

interface IBurgerBuilderState {
  purchasing: boolean;
  loading: boolean;
  error: boolean;
}

interface IBurgerBuilderProps extends IRouterProps {
  ings: IHamburger;
  price: number;
  onIngredientAdded: (str: string) => void;
  onIngredientRemoved: (str: string) => void;
}

class BurgerBuilder extends Component<IBurgerBuilderProps, IBurgerBuilderState> {
  state = {
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount(){
    // axios.get('')
    //   .then(response => {
    //     this.setState({ingredients: response.data});
    //   }).catch( error => {
    //     this.setState({error: true});
    //   });
    
  }

  updatePurchaseState(ingredients: any) {
    const sum = Object.keys(ingredients).reduce((sum, el) => {
      return sum + ingredients[el];
    }, 0);

    return sum > 0;
  }

  purchaseHandler = (): void => {
    this.setState({ purchasing: true });
  };

  purchaceCancelHandler = (): void => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = (): void => {
      this.props.history.push('/checkout');
  }

  render() {
    const disabledInfo: any = {
      ...this.props.ings
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>;

    if(this.props.ings){
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings}/>
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            price={this.props.price}/>
        </Aux>
      );
      orderSummary = <OrderSummary
        ingredients={this.props.ings}
        price={this.props.price}
        purchaseCancelled={this.purchaceCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}/>
    }

    if(this.state.loading){
      orderSummary = <Spinner/>
    }
    
    return (
      <Aux>
        <Modal 
          show={this.state.purchasing}
          modalClose={this.purchaceCancelHandler}>
            {orderSummary}
          </Modal>
      </Aux>
    );
  }
}

const mapStateToProps = (state: IGlobalState) => ({
  ings: state.ingredients,
  price: state.totalPrice,
});

const mapDispatchToProps = (dispatch: any) => ({
  onIngredientAdded: (ingName:string) => dispatch({type: ADD_INGREDIENT, ingredientName: ingName}),
  onIngredientRemoved: (ingName:string) => dispatch({type: REMOVE_INGREDIENT, ingredientName: ingName})
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));
