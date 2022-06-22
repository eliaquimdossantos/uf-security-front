import React from "react"
import { Button, Col, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="d-flex flex-column text-center p-5" style={{background: '#fafafa'}}>
      <div><b><i>Desenvolvido por:</i></b></div>
      <div>Antonio Erisvan Alves Junior</div>
      <div>Eliaquim dos Santos Costa</div>
      <div>Maria Ester De Carvalho Veiga</div>
      <div>Jâncy Wdson Coriolano de Aragão</div>
      <div className="pt-5">©2022</div>
    </footer>
  )
}