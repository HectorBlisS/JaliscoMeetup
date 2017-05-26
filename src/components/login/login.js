import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import * as firebase from 'firebase';

const style = {
  height: 300,
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




class LoginComponent extends React.Component{
  constructor(props){
    super(props);
  }

  loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {

      let token = result.credential.accessToken;

      let user = result.user;
      console.log(user);
        this.props.history.push('about');
    }).catch(function(error) {

      let errorCode = error.code;
      let errorMessage = error.message;

      let email = error.email;

      let credential = error.credential;

    });
  }
  loginFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {

      let token = result.credential.accessToken;

      let user = result.user;
      console.log(user);
      this.props.history.push('advise');
    }).catch(function(error) {

      let errorCode = error.code;
      let errorMessage = error.message;

      let email = error.email;

      let credential = error.credential;


    });
  }


  render(){
    return(
      <div>
      <Paper style={style} zDepth={1} rounded={false}>

        <h2>Únete a la mejor comunidad de recomendaciones de Jalisco <span>😜</span></h2>
        <RaisedButton
          target="_blank"
          label="Inicia con Google"
          secondary={true}
          fullWidth={true}
          style={styles.button}
          onTouchTap={this.loginGoogle}
        />
        <h3>O</h3>
        <RaisedButton
          target="_blank"
          label="Inicia con Facebook"
          primary={true}
          fullWidth={true}
          style={styles.button}
          onTouchTap={this.loginFacebook}
        />
        </Paper>
      </div>
    );
  }
}

export default LoginComponent;


const firebaseConfig = {
    apiKey: "AIzaSyCxNl7FKKXcKQWtel9zcqbUgdIq6GPTQfg",
    authDomain: "recommendationsreact.firebaseapp.com",
    databaseURL: "https://recommendationsreact.firebaseio.com",
    projectId: "recommendationsreact",
    storageBucket: "recommendationsreact.appspot.com",
    messagingSenderId: "1018583225121"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
