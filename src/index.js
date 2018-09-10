import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux'; 
import {Provider} from 'react-redux'; 
import logger from 'redux-logger'; 
import {createMuiTheme} from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles'
import reducers from './redux/reducers/feedbackReducers.js'; 

const theme = createMuiTheme({ 
    palette: {
        primary: {
            light: '#FFFFFF', 
            main: '#0EB3AA', 
            dark: '#FFFFFF',
            contrastText: 'rgb(0,0,0)'
          }
      }
}) // Material UI theme setting 
const storeInstance = createStore (
    reducers,
    applyMiddleware(logger),
);

ReactDOM.render(<MuiThemeProvider theme={theme}><Provider store={storeInstance}><App /></Provider></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
