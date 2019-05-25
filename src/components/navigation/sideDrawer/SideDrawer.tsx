import React from 'react';
import Backdrop from '../../UI/backdrop/Backdrop';
import Logo from '../../logo/Logo';
import Aux from '../../../hoc/Aux';
import NavigationItems from '../navigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

interface ISideDrawerProps{
    open: boolean;
    closed: any;
}

const sideDrawer = (props: ISideDrawerProps) => {
    let attachedClasses = [
        classes.SideDrawer, 
        props.open ? classes.Open : classes.Close
    ];

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;