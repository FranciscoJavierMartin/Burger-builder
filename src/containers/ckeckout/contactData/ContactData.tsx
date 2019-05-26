import React, { Component } from "react";
import { IAddress } from "../../../interfaces/address.interface";
import Button from "../../../components/UI/button/Button";
import Spinner from "../../../components/UI/spinner/Spinner";
import classes from "./ContactData.module.css";
import IHamburger from "../../../interfaces/hamburger.interface";
import axios from "../../../axios-orders";
import { IRouterProps } from "../../../interfaces/routerProps.interface";

interface IContactDataProps extends IRouterProps{
  ingredients: IHamburger;
  price: number;
}

interface IContactDataState {
  name: string;
  email: string;
  address: IAddress;
  loading: boolean;
}

class ContactData extends Component<IContactDataProps, IContactDataState> {
  state: IContactDataState = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = (event: any) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredient: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "John Doe",
        address: {
          street: "Fake street 1",
          zipCode: "12345",
          country: "USA"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form: JSX.Element;

    if (this.state.loading) {
      form = <Spinner />;
    } else {
      form = (
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Postal code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
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
