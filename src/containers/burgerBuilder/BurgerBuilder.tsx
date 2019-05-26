import React, { Component } from "react";
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

interface IBurgerBuilderState {
  // Replace any for the appropiate interface
  ingredients: any;
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
  loading: boolean;
  error: boolean;
}

const INGREDIENT_PRICES = {
  Salad: 0.5,
  Cheese: 0.4,
  Meat: 1.3,
  Bacon: 0.7
};

class BurgerBuilder extends Component<IRouterProps, IBurgerBuilderState> {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount(){
    axios.get('')
      .then(response => {
        this.setState({ingredients: response.data});
      }).catch( error => {
        this.setState({error: true});
      });
    
  }

  updatePurchaseState(ingredients: any) {
    const sum = Object.keys(ingredients).reduce((sum, el) => {
      return sum + ingredients[el];
    }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  // TODO: Refactor for a better approach
  addIngredientHandler = (type: string): void => {
    let oldCount: number;
    let updatedCount: number;
    let updatedIngredients: IHamburger = {};
    let priceAddition: number;
    let oldPrice: number;
    let newPrice: number;

    switch (type) {
      case BACON:
        oldCount = this.state.ingredients[BACON];
        updatedCount = oldCount + 1;
        updatedIngredients = {
          ...this.state.ingredients
        };
        updatedIngredients[BACON] = updatedCount;
        priceAddition = INGREDIENT_PRICES[BACON];
        oldPrice = this.state.totalPrice;
        newPrice = oldPrice + priceAddition;
        this.setState({
          totalPrice: newPrice,
          ingredients: updatedIngredients
        });
        break;
      case SALAD:
        oldCount = this.state.ingredients[SALAD];
        updatedCount = oldCount + 1;
        updatedIngredients = {
          ...this.state.ingredients
        };
        updatedIngredients[SALAD] = updatedCount;
        priceAddition = INGREDIENT_PRICES[SALAD];
        oldPrice = this.state.totalPrice;
        newPrice = oldPrice + priceAddition;
        this.setState({
          totalPrice: newPrice,
          ingredients: updatedIngredients
        });
        break;
      case MEAT:
        oldCount = this.state.ingredients[MEAT];
        updatedCount = oldCount + 1;
        updatedIngredients = {
          ...this.state.ingredients
        };
        updatedIngredients[MEAT] = updatedCount;
        priceAddition = INGREDIENT_PRICES[MEAT];
        oldPrice = this.state.totalPrice;
        newPrice = oldPrice + priceAddition;
        this.setState({
          totalPrice: newPrice,
          ingredients: updatedIngredients
        });
        break;
      case CHEESE:
        oldCount = this.state.ingredients[CHEESE];
        updatedCount = oldCount + 1;
        updatedIngredients = {
          ...this.state.ingredients
        };
        updatedIngredients[CHEESE] = updatedCount;
        priceAddition = INGREDIENT_PRICES[CHEESE];
        oldPrice = this.state.totalPrice;
        newPrice = oldPrice + priceAddition;
        this.setState({
          totalPrice: newPrice,
          ingredients: updatedIngredients
        });
        break;
      default:
      //TODO: Throw an exception
    }

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type: string): void => {
    let oldCount: number;
    let updatedCount: number;
    let updatedIngredients: IHamburger = {};
    let priceAddition: number;
    let oldPrice: number;
    let newPrice: number;

    switch (type) {
      case BACON:
        oldCount = this.state.ingredients[BACON];
        if (oldCount > 0) {
          updatedCount = oldCount - 1;
          updatedIngredients = {
            ...this.state.ingredients
          };
          updatedIngredients[BACON] = updatedCount;
          priceAddition = INGREDIENT_PRICES[BACON];
          oldPrice = this.state.totalPrice;
          newPrice = oldPrice - priceAddition;
          this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
          });
        }

        break;
      case SALAD:
        oldCount = this.state.ingredients[SALAD];
        if (oldCount > 0) {
          updatedCount = oldCount - 1;
          updatedIngredients = {
            ...this.state.ingredients
          };
          updatedIngredients[SALAD] = updatedCount;
          priceAddition = INGREDIENT_PRICES[SALAD];
          oldPrice = this.state.totalPrice;
          newPrice = oldPrice - priceAddition;
          this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
          });
        }
        break;
      case MEAT:
        oldCount = this.state.ingredients[MEAT];
        if (oldCount > 0) {
          updatedCount = oldCount - 1;
          updatedIngredients = {
            ...this.state.ingredients
          };
          updatedIngredients[MEAT] = updatedCount;
          priceAddition = INGREDIENT_PRICES[MEAT];
          oldPrice = this.state.totalPrice;
          newPrice = oldPrice - priceAddition;
          this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
          });
        }
        break;
      case CHEESE:
        oldCount = this.state.ingredients[CHEESE];
        if (oldCount > 0) {
          updatedCount = oldCount - 1;
          updatedIngredients = {
            ...this.state.ingredients
          };
          updatedIngredients[CHEESE] = updatedCount;
          priceAddition = INGREDIENT_PRICES[CHEESE];
          oldPrice = this.state.totalPrice;
          newPrice = oldPrice - priceAddition;
          this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
          });
        }
        break;
      default:
    }

    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = (): void => {
    this.setState({ purchasing: true });
  };

  purchaceCancelHandler = (): void => {
    this.setState({purchasing: false});
  }

  pruchaseContinueHandler = (): void => {

      const queryParams = [];

      for(let i in this.state.ingredients){
        queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent((this.state.ingredients as any)[i]));
      }

      queryParams.push('price='+this.state.totalPrice);
      const queryString= queryParams.join('&');

      this.props.history.push({
        pathname: '/checkout',
        search: '?'+queryString
      });
  }

  render() {
    const disabledInfo: any = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>;

    if(this.state.ingredients){
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}/>
        </Aux>
      );
      orderSummary = <OrderSummary
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaceCancelHandler}
        purchaseContinued={this.pruchaseContinueHandler}/>
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

export default withErrorHandler(BurgerBuilder,axios);
