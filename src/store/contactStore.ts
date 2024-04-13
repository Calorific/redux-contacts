import { makeAutoObservable } from 'mobx'
import { ContactDto } from 'src/types/dto/ContactDto'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { getContacts, getGroups } from 'src/api/contacts'

export const contactStore = makeAutoObservable({
  contacts: [] as ContactDto[],
  favorites: [] as FavoriteContactsDto,
  groups: [] as GroupContactsDto[],
  contactsLoading: true as boolean,
  groupLoading: true as boolean,

  *getContacts() {
    contactStore.contactsLoading = true

    const res: ContactDto[] | string = yield getContacts()

    if (typeof res !== 'string') {
      contactStore.contacts = res
      contactStore.favorites = res.slice(0, 4).map(c => c.id)
    }

    contactStore.contactsLoading = false
  },
  *getGroups() {
    contactStore.groupLoading = true

    const res: GroupContactsDto[] | string = yield getGroups()

    if (typeof res !== 'string') {
      contactStore.groups = res
    }

    contactStore.groupLoading = false
  }
})