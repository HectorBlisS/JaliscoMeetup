import React from 'react';
import logo from '../../logo.svg';
import RaisedButton from 'material-ui/RaisedButton';



class HomePAge extends React.Component {

    componentWillMount () {
        alert('ño');
        // this.props.history.push('about');
    }

    render(){
    return(

        <div>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <RaisedButton label="Primary" primary={true} />
        </div>

    );
    }
};

export default HomePAge;
