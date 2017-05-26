import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

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
                </Drawer>


            </div>
        );
    }
}

export default Navbar;


