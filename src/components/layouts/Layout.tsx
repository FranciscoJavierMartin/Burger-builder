import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

interface ILayoutProps {
    children: JSX.Element;
}

const layout = (props:ILayoutProps) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;