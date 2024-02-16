import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/redux/hooks'

export const FavoriteListPage = memo(() => {
  const contacts = useAppSelector(state => {
    return state.contacts?.entities.filter(c => state.contacts?.favorites.includes(c.id))
  })

  return (
      <Row xxl={4} className="g-4">
        {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
        ))}
      </Row>
  )
})
