import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { contactStore } from 'src/store/contactStore'
import { observer } from 'mobx-react-lite'

export const GroupListPage = observer(() => {
  const groups = contactStore.groups

  if (contactStore.groupLoading)
    return <h2>Загрузка...</h2>

  return (
    <Row xxl={4}>
      {groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
})
