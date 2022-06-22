import React from "react"
import { Card, Col, Row } from "react-bootstrap"

export default function Occurrence(props) {
  return (
    <Card className="ml-auto mr-auto" style={{ background: '#F5F5F5' }}>
      <Card.Body>
        <Row>
          <h4>{props.title}</h4>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={5}>
            <b>Localidade:</b> {props.location}<br />
            <b>Turno do ocorrido:</b> {props.shift} <br />
          </Col >
          <Col xs={12} md={6} lg={7}>
            <b>Descrição: </b>{props.description}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
