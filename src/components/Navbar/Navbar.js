import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});


    render(){
        return(
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onTouchTap={this.handleToggle}

                />

                <Drawer docked={false} open={this.state.open}>
                    <Toolbar>
                        <ToolbarTitle text="FixterGeek" />
                    </Toolbar>
                    <Link to="/">
                    <MenuItem onTouchTap={this.handleClose}>

                        Home

                    </MenuItem>
                    </Link>
                    <Link to="about">
                    <MenuItem onTouchTap={this.handleClose}>

                            About

                    </MenuItem>
                    </Link>
                    <Link to="login">
                    <MenuItem onTouchTap={this.handleClose}>

                            Inicia

                    </MenuItem>
                      </Link>


                </Drawer>


            </div>
        );
    }
}

export default Navbar;
