import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'
import { createSlice } from '@reduxjs/toolkit'
import { getContacts } from './api'

interface ContactsInitialState {
  favorites: FavoriteContactsDto
}

const initialState: ContactsInitialState = {
  favorites: []
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(getContacts.matchFulfilled, (state, { payload }) => {
      return { ...state, favorites: payload.slice(0, 4).map(c => c.id) }
    })
  }
})
