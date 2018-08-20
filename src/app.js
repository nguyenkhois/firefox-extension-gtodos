import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Route, routerReducers as router } from 'react-pretence-router';

import './styles.css';

import { todosReducer as todosApp } from './reducers/todos.reducer';

import { TodoX } from './components/todos.component';
import { DeletedTaskX } from './components/deleted-tasks.component';
import { MenuX } from './menu';
import Footer from './footer';

const rootReducer = combineReducers({todosApp, router})

const store = createStore(rootReducer,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const App = () => (
    <Provider store={store}>
        <div>
            <MenuX/>
            <Route path={'/'} component={TodoX}/>
            <Route path={'/deleted'} component={DeletedTaskX}/>
            <Footer/>
        </div>
    </Provider>
)