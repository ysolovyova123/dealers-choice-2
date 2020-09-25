import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import groups from './groups'
import tables from './tables'
import guests from './guests'
import groupName from './groupSelection'


const reducer = combineReducers({
  groups,
  tables,
  guests,
  groupName
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed:true}))
)

const store = createStore(reducer, middleware)

export default store
