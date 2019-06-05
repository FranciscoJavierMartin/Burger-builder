import React, { Component } from "react";
import Button from "../../../components/UI/button/Button";
import Spinner from "../../../components/UI/spinner/Spinner";
import classes from "./ContactData.module.css";
import IHamburger from "../../../interfaces/hamburger.interface";
import axios from "../../../axios-orders";
import { IRouterProps } from "../../../interfaces/routerProps.interface";
import Input from "../../../components/UI/input/Input";
import { InputElement } from "../../../interfaces/inputs.interface";

interface IContactDataProps extends IRouterProps {
  ingredients: IHamburger;
  price: number;
}

interface IOrderForm {
  name: InputElement;
  street: InputElement;
  zipCode: InputElement;
  country: InputElement;
  email: InputElement;
  deliveryMethod: InputElement;
}

interface IContactDataState {
  orderForm: IOrderForm;
  loading: boolean;
  formIsValid: boolean;
}

class ContactData extends Component<IContactDataProps, IContactDataState> {

  state: IContactDataState = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 6
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "fastest",
        valid: false
      }
    },
    loading: false,
    formIsValid: false
  };

  orderHandler = (event: any) => {
    event.preventDefault();

    this.setState({ loading: true });
    const formData: any = {};
    for(let formElementIdentifier in this.state.orderForm){
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredient: this.props.ingredients,
      price: this.props.price
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  checkValidity(value: string, rules: any) {
    let isValid = true;

    if(rules) {
      if(rules.required){
        isValid = isValid && value.trim() !== '';
      }
  
      if(rules.minLength){
        isValid = isValid && value.length >= rules.minLength;
      }
  
      if(rules.maxLength){
        isValid = isValid && value.length <= rules.maxLength;
      }
    }
    

    return isValid;
  }

  inputChangedHandler = (event: any, inputIdentifier: string) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    const formIsValid = true;
    for(let inputIdentifier in updatedOrderForm){
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
    }

    this.setState({orderForm: updatedOrderForm, formIsValid});
  }

  render() {
    let form: JSX.Element;
    const formElementsArray = [];

    for(let key in this.state.orderForm){
      formElementsArray.push({
        id: key,
        // TODO: Add index signature
        config: (this.state.orderForm as any)[key.toString()],
      })
    }

    if (this.state.loading) {
      form = <Spinner />;
    } else {
      form = (
        <form onSubmit={this.orderHandler}>
          <Input elementType="..." elementConfig="..." value="..."/>
          {formElementsArray.map(formElement => (
            <Input 
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.elementConfig}
              invalid={!formElement.config.valid}
              shouldValidate={!!formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event)=>this.inputChangedHandler(event, formElement.id)}/>
          ))}
          <Button btnType="Success" 
            disabled={!this.state.formIsValid} clicked={this.orderHandler}>
            Order
          </Button>
        </form>
      );
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
