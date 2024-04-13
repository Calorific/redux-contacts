import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { contactStore } from 'src/store/contactStore'
import { observer } from 'mobx-react-lite'

export const FavoriteListPage = observer(() => {
  const contacts = contactStore.contacts
  const favouritesIds = contactStore.favorites
  const favourites = contacts?.filter(c => favouritesIds.includes(c.id))

  if (contactStore.contactsLoading)
    return <h2>Загрузка...</h2>

  if (!favourites)
    return <h2>В изобранном пусто</h2>

  return (
    <Row xxl={4} className="g-4">
      {favourites.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
})
