import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 400,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  padding: 10,
};
const styles = {
  button: {
    margin: 0 ,

  }
};

class Login extends React.Component{

  render(){
    return(
      <div>
      <Paper style={style} zDepth={1} rounded={false}>

        <h2>Inicia y ...</h2>
        <RaisedButton
          target="_blank"
          label="Github Link"
          secondary={true}
          fullWidth={true}
          style={styles.button}
        />
        </Paper>
      </div>
    );
  }
}

export default Login;
