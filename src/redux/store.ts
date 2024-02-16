import { combineReducers, createStore } from 'redux'
import { contactsReducer } from './contactsReducer'


export const store = createStore(
    combineReducers({
      contacts: contactsReducer
    })
)

export type RootState = ReturnType<typeof store.getState>