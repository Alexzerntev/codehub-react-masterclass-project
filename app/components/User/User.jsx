import React from "react";
import { Row, Col, Navbar, NavbarBrand, Nav, Media } from "reactstrap";

import RoundedImage from "../RoundedImage/RoundedImage"

const User = ({ user }) => {
  return (
    <Row>
      <Col xs={12}>
        <Navbar color="light" light>
          <NavbarBrand href="#">Code.Hub Dashboard</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {user && (
              <Media>
                <Media left>
                  <RoundedImage
                    size="50"
                    imgPath={user.imgPath}
                    name={user.name}
                  />
                </Media>
                <Media body className="user-text">
                  {user.username}
                </Media>
              </Media>
            )}
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );

};

export default User;