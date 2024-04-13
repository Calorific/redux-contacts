import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { useGetContactsQuery, useGetGroupsQuery } from 'src/redux/contacts'

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>()
  const { data: groups } = useGetGroupsQuery()
  const { data: allContacts } = useGetContactsQuery()

  if (!groups || !allContacts)
    return <h2>Загрузка...</h2>

  const group = groups.find(g => g.id === groupId)

  if (!group)
    return <h2>Группа не найдена</h2>

  const contacts = allContacts.filter(c => group.contactIds.includes(c.id))

  return (
      <Row className="g-4">
        {contacts && group ? (
          <>
            <Col xxl={12}>
              <Row xxl={3}>
                <Col className="mx-auto">
                  <GroupContactsCard groupContacts={group} />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row xxl={4} className="g-4">
                {contacts.map((contact) => (
                  <Col key={contact.id}>
                    <ContactCard contact={contact} withLink />
                  </Col>
                ))}
              </Row>
            </Col>
          </>
        ) : <Empty />}
      </Row>
  )
})
