export interface IOptionSelect{
    value: string;
    displayValue: string;
  }
  
  export interface IElementConfigInput{
    type: string;
    placeholder: string;
  }
  
  export interface IElementConfigSelect{
    options: IOptionSelect[];
  }
  
  export interface InputElement {
    elementType: string;
    elementConfig: IElementConfigInput | IElementConfigSelect;
    value: string;
    validation?: {
      required: boolean;
      minLength?: number;
      maxLength?: number;
    },
    valid?: boolean;
    touched?: boolean;
  }
  
  /*export interface SelectElement {
    elementType: string;
    elementConfig: IElementConfigSelect
    value: string;
  }*/