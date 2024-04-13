import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/redux/hooks'
import { useGetContactsQuery } from 'src/redux/contacts'

export const FavoriteListPage = memo(() => {
  const { data: contacts, isLoading } = useGetContactsQuery()
  const favouritesIds = useAppSelector(state => state.contacts?.favorites)
  const favourites = contacts?.filter(c => favouritesIds.includes(c.id))

  if (isLoading)
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
