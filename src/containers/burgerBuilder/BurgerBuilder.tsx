import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/Burger';
import IHamburger from '../../interfaces/hamburger.interface';
import BuildControls from '../../components/burger/buildControls/BuildControls';

interface IBurgerBuilderState {
    ingredients: IHamburger;
}

class BurgerBuilder extends Component<{}, IBurgerBuilderState> {

    state = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Aux>
        )
    }
}

export default BurgerBuilder;