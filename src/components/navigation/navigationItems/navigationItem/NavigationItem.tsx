import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

interface INavigationItemProps {
    link: string;
    children: JSX.Element | string;
    exact?: boolean;
}

const navigationItem = (props: INavigationItemProps) => (
    <li className={classes.NavigationItem}>
        <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;