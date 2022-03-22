import * as React from 'react';
import { Container, Navbar, NavbarBrand, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';

function NavMenu() {
 return ( 
  <header>
   <Navbar light>
    <Container>
     <NavbarBrand tag={Link} to="/">Contestants react app</NavbarBrand>
     <NavLink tag={Link} to="/">Home</NavLink>
     <NavLink tag={Link} to="/contestants">Contestants</NavLink>
    </Container>
   </Navbar>
  </header>
 )
}
export default NavMenu;