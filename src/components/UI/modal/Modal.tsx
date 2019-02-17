import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../backdrop/Backdrop';

interface IModalProps {
    children: JSX.Element;
    show: boolean;
    modalClose: () => void;
}

const modal = (props: IModalProps) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClose}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? 1 : 0
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;