import { contactsSlice } from './slice'
import { contactsApiSlice } from './api'

export const { useGetContactsQuery, useGetGroupsQuery } = contactsApiSlice

export const contactsReducer = contactsSlice.reducer

export const contactsApiReducer = contactsApiSlice.reducer
export const contactsApiReducerPath = contactsApiSlice.reducerPath
export const contactsApiMiddleware = contactsApiSlice.middleware