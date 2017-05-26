import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




class Advise extends Component {
    constructor(){
        super();

        this.state = {
            advise: ''
        }
    }

    save = () => {
       alert(this.state.advise) ;
       this.props.history.push('/');
    };

    render(){
        return(
            <div style={styles.container}>
                <form onSubmit={this.save}>
                    <TextField
                        hintText="Vayan a las tortas don josé"
                        floatingLabelText="Recomiendanos algo!"
                        multiLine={true}
                        rows={2}
                        fullWidth={true}
                        onChange={e=>this.setState({advise:e.target.value})}

                    />
                    <RaisedButton type="submit" label="Secondary" secondary={true} />
                </form>
            </div>

        );
    }
}

const styles = {
    container: {
        width: '80%',
        margin: '0 auto'
    }
};

export default Advise;