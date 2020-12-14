import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import searchModeReducer from './Store/Reducers/SearchModeReducer';
import chooseCategoryReducer from './Store/Reducers/chooseCategoryReducer';
import searchInputValuesReducer from './Store/Reducers/searchInputValuesReducer';
import App from './App';


const rootReducer = combineReducers({
  search: searchModeReducer,
  category: chooseCategoryReducer,
  searchInputValues: searchInputValuesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = <Provider store={Store}><App /></Provider>

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

