import React, { FC, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { useAppSelector } from 'src/redux/hooks'


export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>()
  const contact = useAppSelector(state => {
    return state.contacts?.entities.find(c => c.id === contactId)
  })

  return (
      <Row xxl={3}>
        <Col className={'mx-auto'}>
          {contact ? <ContactCard contact={contact} /> : <Empty />}
        </Col>
      </Row>
  )
}
