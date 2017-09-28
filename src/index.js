import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Cookies from 'js-cookie';
import reducer from './reducers'
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Login from './components/Login';
import Register from './components/Register';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxThunk)
  ));


ReactDOM.render(

  <Provider store={store}>
  <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
    </BaseLayout>
  </BrowserRouter>

  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
