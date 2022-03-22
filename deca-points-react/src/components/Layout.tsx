import React from "react";
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";

export default (props: {children?: React.ReactNode}) => (
 <>
  <NavMenu/>
  <Container>
    {props.children}
  </Container>
 </>
);