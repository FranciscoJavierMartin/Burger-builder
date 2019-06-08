import React, { Component } from "react";
import {connect } from 'react-redux';
import Aux from "../../hoc/Aux";
import Burger from "../../components/burger/Burger";
import IHamburger from "../../interfaces/hamburger.interface";
import BuildControls from "../../components/burger/buildControls/BuildControls";
import Modal from "../../components/UI/modal/Modal";
import Spinner from '../../components/UI/spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import axios from '../../axios-orders';

import { BACON, SALAD, MEAT, CHEESE } from "../../constants/ingredients";
import OrderSummary from "../../components/burger/orderSummary/OrderSummary";
import { IRouterProps } from "../../interfaces/routerProps.interface";
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../../store/actions/actions";
import { IGlobalState } from "../../interfaces/state.interface";
import * as burgerBuilderActions from '../../store/actions';

interface IBurgerBuilderState {
  purchasing: boolean;
}

interface IBurgerBuilderProps extends IRouterProps {
  ings: IHamburger;
  price: number;
  error: boolean;
  onIngredientAdded: (str: string) => void;
  onIngredientRemoved: (str: string) => void;
  onInitIngredients: () => void;
}

class BurgerBuilder extends Component<IBurgerBuilderProps, IBurgerBuilderState> {
  state = {
    purchasing: false,
  };

  componentDidMount(){
    this.props.onInitIngredients();
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
    let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>;

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
  error: state.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  onIngredientAdded: (ingName:string) => dispatch(burgerBuilderActions.addIngredient(ingName)),
  onIngredientRemoved: (ingName:string) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
  onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));
