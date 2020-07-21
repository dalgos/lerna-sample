import { configureStore, combineReducers, ReducersMapObject, Middleware, getDefaultMiddleware } from '@reduxjs/toolkit'

import reducer from './reducer'

const createStore = (reducers: ReducersMapObject = {}, middlewares: Array<Middleware> = []) => {
  const store = configureStore({
    reducer: combineReducers({
      app: reducer,
      ...reducers,
    }),
    middleware: [
      ...getDefaultMiddleware(),
      ...middlewares,
    ],
  })
  return store
}

export default createStore
