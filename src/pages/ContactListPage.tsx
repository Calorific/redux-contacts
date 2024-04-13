import React, { memo, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { useAppSelector } from 'src/redux/hooks'


export const ContactListPage = memo(() => {
  const contacts = useAppSelector(state => state.contacts?.entities)
  const groups = useAppSelector(state => state.contacts?.groups)
  const [filter, setFilter] = useState<FilterFormValues>({ name: '', groupId: '' })


  let filtered = contacts

  if (filter.name) {
    const fvName = filter.name.toLowerCase()
    filtered = filtered.filter(({ name }) => (
        name.toLowerCase().indexOf(fvName) > -1
    ))
  }

  if (filter.groupId) {
    const groupContacts = groups.find(({ id }) => id === filter.groupId)

    if (groupContacts) {
      filtered = filtered.filter(({ id }) => (
          groupContacts.contactIds.includes(id)
      ))
    }
  }

  return (
      <Row xxl={1}>
        <Col className="mb-3">
          <FilterForm groupContactsList={groups} initialValues={{ name: '', groupId: '' }} onSubmit={setFilter} />
        </Col>
        <Col>
          <Row xxl={4} className="g-4">
            {filtered.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
            ))}
          </Row>
        </Col>
      </Row>
  )
})
