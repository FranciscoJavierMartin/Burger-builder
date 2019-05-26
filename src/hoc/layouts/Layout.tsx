import React, { Component } from 'react';

import Aux from '../Aux';
import Toolbar from '../../components/navigation/toolbar/Toolbar';
import SideDrawer from '../../components/navigation/sideDrawer/SideDrawer';
import classes from './Layout.module.css';

interface ILayoutProps {
    children: JSX.Element | JSX.Element[];
}

interface ILayoutState {
    showSideDrawer: boolean;
}

class Layout extends Component<ILayoutProps,ILayoutState>{

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState: ILayoutState) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render(){
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}



export default Layout;