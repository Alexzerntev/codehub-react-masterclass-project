import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./Header/Header";
import Employees from "./Employees/Employees";
import Footer from "./Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Employees />
        <Footer />
      </Container>
    );
  }
}

export default Layout;
