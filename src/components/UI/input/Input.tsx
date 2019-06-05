import React from 'react';
import classes from './Input.module.css';
import { IElementConfigSelect, IElementConfigInput, IOptionSelect } from '../../../interfaces/inputs.interface';

interface IInputProps {
    label: string;
    inputtype?: string;
    elementConfig:  IElementConfigInput | IElementConfigSelect;
    value: string;
}

const input = (props: IInputProps) => {
    let inputElement = null;

    switch(props.inputtype){
        case ('input'):
            inputElement = <input className={classes.InputElement} 
            {...props.elementConfig} value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} 
            {...props.elementConfig} value={props.value}/>;
            break;
        case ('select'):
            inputElement = (<select className={classes.InputElement} 
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
            inputElement = <input className={classes.InputElement} 
            {...props.elementConfig} value={props.value}/>;
    }

    return (
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
    </div>
);}

export default input;