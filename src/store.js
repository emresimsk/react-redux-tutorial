import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

import rootReducer from './reducers';


const middleware = applyMiddleware(thunk,logger);

const middlewareCompose = compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(rootReducer,middlewareCompose);

export default store;