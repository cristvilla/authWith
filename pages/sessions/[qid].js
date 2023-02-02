import React from 'react'
import { useRouter } from 'next/router'
import Container from '../../components/Container'
import SessionDetailTable from '../../components/sessions/SessionDetailTable'

const SessionDetail = () => {
  const router = useRouter()
  return (
    <Container>
      <SessionDetailTable data={router.query} />
    </Container>
  )
}

export default SessionDetail
