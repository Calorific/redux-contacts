import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer, contactsApiReducer, contactsApiReducerPath, contactsApiMiddleware } from './contacts'

export const store = configureStore({
  reducer: combineReducers({
    contacts: contactsReducer,
    [contactsApiReducerPath]: contactsApiReducer
  }),
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(contactsApiMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
