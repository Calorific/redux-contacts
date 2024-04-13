import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useGetGroupsQuery } from 'src/redux/contacts'

export const GroupListPage = memo(() => {
  const { data: groups } = useGetGroupsQuery()

  if (!groups)
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
