import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// Add name
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Chad Hinds</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
