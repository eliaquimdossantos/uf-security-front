import { Container, Nav, Navbar as NavbarBootstrap } from "react-bootstrap";
import Image from "next/image";

export default function Navbar() {
  return (
    <NavbarBootstrap bg="dark" variant="dark">
      <Container>
        <NavbarBootstrap.Brand href="#home">          
            <Image src="/logo.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </NavbarBootstrap.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>          
        </Nav>
      </Container>
    </NavbarBootstrap>
  )
}