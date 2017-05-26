import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();


const Main = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
