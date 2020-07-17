import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './components/Redux/ReduxSaga/sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [sagaMiddleware, thunkMiddleware]

export const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middlewares)))
sagaMiddleware.run(rootSaga)
