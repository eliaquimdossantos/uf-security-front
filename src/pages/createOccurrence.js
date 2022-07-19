import { useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import Layout from '../components/templates/createOccurrenceLayout'

export default function CreateOccurrence(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [shift, setShift] = useState()
  const [locationId, setLocationId] = useState()
  const [locations, setLocations] = useState([])

  useEffect(() => {
    if (props.locations) {
      setLocations(props.locations)
    }
  }, [props])

  return (
    <Layout>
      <h2>Cadastrar ocorrência</h2>
      <label>Titulo:</label>
      <Form.Control id="title" type="text" placeholder="Assalto em frente ao IMD" value={title}
        onChange={e => setTitle(e.target.value)} /><br />

      <label>Descrição:</label>
      <Form.Control id="description" className="form-control" as="textarea" rows={3}
        value={description} placeholder="Fui assaltado enquanto...  "
        onChange={e => setDescription(e.target.value)} /><br />
      <Row>
        <Col>
          <label>Turno:</label>
          <Form.Select onChange={e => setShift(e.target.value)}>
            <option>Selecione</option>
            <option value="Noite">Noite</option>
            <option value="Tarde">Tarde</option>
            <option value="Manhã">Manhã</option>
          </Form.Select>
        </Col>
        <Col>
          <label>Local:</label>
          <Form.Select onChange={e => setLocationId(e.target.value)}>
            <option>Selecione</option>
            {
              locations.map((location, key) => (
                <option key={key} value={location.id}>
                  {location.name}
                </option>
              ))
            }
          </Form.Select>
        </Col>
      </Row><br />
      <Button className="mb-1" onClick={() => {
        axios
          .post(
            'https://uf-security-api.herokuapp.com/occurrences',
            { title, description, locationId, shift })
          .then(res => {
            console.log(res.data)
            alert("Ocorrência cadastrada com sucesso")
          })
      }}>
        Cadastrar
      </Button>
      <Button href="/" variant="secondary">Voltar ao início</Button>
    </Layout>
  )
}

export async function getServerSideProps() {
  const resLoc = await fetch('https://uf-security-api.herokuapp.com/locations')
  const locations = await resLoc.json()

  return {
    // Passa o que está entre chaves para a variável 'props' da função Home(props) 
    // lá em cima
    props: { locations },
  }
}