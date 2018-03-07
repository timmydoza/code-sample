import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import CarFinder from './containers/CarFinder/CarFinder';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './store/reducers';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><CarFinder /></Provider>, document.getElementById('root'));
registerServiceWorker();
