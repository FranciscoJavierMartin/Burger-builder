import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/burger/Burger";
import IHamburger from "../../interfaces/hamburger.interface";
import BuildControls from "../../components/burger/buildControls/BuildControls";
import { BACON, SALAD, MEAT, CHEESE } from '../../constants/ingredients';

interface IBurgerBuilderState {
  ingredients: IHamburger;
  totalPrice: number;
}

const INGREDIENT_PRICES = {
  Salad: 0.5,
  Cheese: 0.4,
  Meat: 1.3,
  Bacon: 0.7
};

class BurgerBuilder extends Component<{}, IBurgerBuilderState> {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0
    },
    totalPrice: 4
  };

  // TODO: Refactor for a better approach
  addIngredientHandler = (type: string):void => {
    let oldCount:number;
    let updatedCount: number;
    let updatedIngredients: IHamburger;
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
    }
  };

  removeIngredientHandler = (type: string):void => {
    let oldCount:number;
    let updatedCount: number;
    let updatedIngredients: IHamburger;
    let priceAddition: number;
    let oldPrice: number;
    let newPrice: number;

    switch (type) {
      case BACON:
        oldCount = this.state.ingredients[BACON];
        if(oldCount > 0){
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
        if(oldCount > 0){
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
        });}
        break;
      case MEAT:
        oldCount = this.state.ingredients[MEAT];
        if(oldCount > 0){
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
        });}
        break;
      case CHEESE:
        oldCount = this.state.ingredients[CHEESE];
        if(oldCount > 0){
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
        });}
        break;
      default:
    }
  };

  render() {
    const disabledInfo:any = {
      ...this.state.ingredients
    };

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
