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

    render(){
        return(
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onTouchTap={this.handleToggle}

                />

                <Drawer open={this.state.open}>
                    <MenuItem>
                        <Link to="/">
                        Home
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="about">
                            About
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="login">
                            Inicia
                        </Link>
                    </MenuItem>
                </Drawer>


            </div>
        );
    }
}

export default Navbar;
