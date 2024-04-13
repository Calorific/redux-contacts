import { ContactDto } from 'src/types/dto/ContactDto'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'
import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

interface ContactsInitialState {
  entities: ContactDto[],
  favorites: FavoriteContactsDto,
  groups: GroupContactsDto[]
}

const initialState: ContactsInitialState = {
  entities: DATA_CONTACT,
  favorites: [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id
  ],
  groups: DATA_GROUP_CONTACT
}

export const contactsReducer = (state = initialState) => {
  return state
}