import React from 'react';
import classes from './NavigationItem.module.css';

interface INavigationItemProps {
    link: string;
    children: JSX.Element | string;
    active?: boolean;
}

const navigationItem = (props: INavigationItemProps) => (
    <li className={classes.NavigationItem}>
        <a href={props.link} className={props.active ? classes.active : null}>
            {props.children}
        </a>
    </li>
);

export default navigationItem;