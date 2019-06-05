import React from 'react';
import classes from './Input.module.css';
import { IElementConfigSelect, IElementConfigInput, IOptionSelect } from '../../../interfaces/inputs.interface';

interface IInputProps {
    label: string;
    inputtype?: string;
    elementConfig:  IElementConfigInput | IElementConfigSelect;
    value: string;
    changed: (event: any) => void;
    invalid: boolean;
    shouldValidate: boolean;
    touched: boolean;
    errorMessage?: string;
}

const input = (props: IInputProps) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
    }

    switch(props.inputtype){
        case ('input'):
            inputElement = <input onChange={props.changed} className={inputClasses.join(' ')} 
            {...props.elementConfig} value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea onChange={props.changed} className={inputClasses.join(' ')} 
            {...props.elementConfig} value={props.value}/>;
            break;
        case ('select'):
            inputElement = (<select onChange={props.changed} className={inputClasses.join(' ')} 
            {...props.elementConfig} value={props.value}>
                {(props.elementConfig as IElementConfigSelect).options.map(
                    (optionFromSelect: IOptionSelect) => (
                        <option value={optionFromSelect.value}>
                            {optionFromSelect.displayValue}
                        </option>
                ))}
            </select>);
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} 
            {...props.elementConfig} value={props.value}/>;
    }

    let validationError = null;
    if(props.invalid && props.touched){
        validationError = <p className={classes.ValidationError}>
                {!!props.errorMessage ? props.errorMessage : 'Please enter a valid value'}
            </p>;
    }

    return (
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
        {validationError}
    </div>
);}

export default input;