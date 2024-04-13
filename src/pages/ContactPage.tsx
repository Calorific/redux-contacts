import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { observer } from 'mobx-react-lite'
import { contactStore } from 'src/store/contactStore'


export const ContactPage: FC = observer(() => {
  const { contactId } = useParams<{ contactId: string }>()
  const contacts = contactStore.contacts

  if (contactStore.contactsLoading)
      return <h2>Загрузка...</h2>

  const contact = contacts.find(c => c.id === contactId)

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
})
