import Occurrence from '../components/molecules/occurrence'

export default function Home(props) {
  return (
    <>
      <Occurrence 
        title={'Roubaram meu celular'}
        description={'Enquanto eu estava andando próximo ao terminal do circular, apareceram 2 indivíduos e levaram meu celular'}
        shift={'Noturno'}
        location= {'IMD'}
      />
    </>
  )
  
}

export async function getServerSideProps(context) {

  const res = await fetch('https://uf-security-api.herokuapp.com/occurrences')  
  const data = await res.json()  
  /** 'data' é um uma lista de objetos json como mostrado abaixo
   
  [
    {
      "id": 1,
      "title": "Assalto",
      "description": "Roubaram meu celular",
      "shift": "Noturno",
      "createdAt": "2022-06-22T15:02:00.483Z",
      "updatedAt": "2022-06-22T15:02:00.483Z",
      "locationId": 2,
      "location": {
        "id": 2,
        "name": "IMD",
        "address": "Potilândia",
        "createdAt": "2022-06-22T15:01:41.268Z",
        "updatedAt": "2022-06-22T15:01:41.268Z"
      }
    }
  ]

  O que fazer a partir destes dados:
    1 - Passar os dados dentro do objeto (dentro das chaves) props abaixo
    2 - Trocar os valores estáticos do componente <Occurrence> pelos
        valores que estão dentro do objeto 'props'
    3 - Usar uma função de laço para criar novos componentes <Ocurrence> 
        para poder listar todas as ocorrências (eu usaria a função MAP, 
        pesquisa como usá-la em react)
  
  */ 

  return {
    // Passa o que está entre chaves para a variável 'props' da função Home(props) 
    // lá em cima
    props: {}, 
  }
}