import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { useGetContactsQuery } from 'src/redux/contacts'


export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>()
  const { data: contacts } = useGetContactsQuery()

  if (!contacts)
      return <h2>Загрузка...</h2>

  const contact = contacts.find(c => c.id === contactId)

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
}
