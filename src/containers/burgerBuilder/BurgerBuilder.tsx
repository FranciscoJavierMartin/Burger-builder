import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/Burger';

interface IBurgerBuilderState {
    ingredients: {};
}

class BurgerBuilder extends Component<{}, IBurgerBuilderState> {

    state = {
        ingredients: {
            Salad: 1,
            Bacon: 1,
            Cheese: 2,
            Meat: 2
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;