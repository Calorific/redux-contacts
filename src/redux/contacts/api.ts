import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const contactsApiSlice = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/',
  }),
  endpoints(builder) {
    return {
      getContacts: builder.query<ContactDto[], void>({
        query: () =>  ({ url: '190/h/560e0501fa0e19aed9ef169df6095f00.json' })
      }),
      getGroups: builder.query<GroupContactsDto[], void>({
        query: () =>  ({ url: '503/h/03b7cef5194e433422491a8f22413a18.json' })
      })
    }
  }
})

export const { getContacts } = contactsApiSlice.endpoints
