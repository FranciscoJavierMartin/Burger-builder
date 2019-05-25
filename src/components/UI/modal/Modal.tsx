import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../backdrop/Backdrop';

interface IModalProps {
    children: JSX.Element | JSX.Element[] | null;
    show: boolean;
    modalClose: () => void;
}

class Modal extends Component<IModalProps, {}>{

    shouldComponentUpdate(nextProps: IModalProps, nextState: any){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render(){
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClose}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? 1 : 0
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}



export default Modal;