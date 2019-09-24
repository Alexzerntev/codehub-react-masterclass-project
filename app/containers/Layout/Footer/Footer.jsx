import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";

import React from 'react';

const Footer = ({ user }) => {
  return (
    <Row>
      <Col xs={12}>
        <footer>
          {user && (
            <div>
              logged in as {user.name} {user.admin && "(admin)"}
            </div>
          )}
          <div>
            Made with ❤️ in Athens, Greece | <a href="https://tsevdos.me">tsevdos.me</a>
          </div>
        </footer>
      </Col>
    </Row>
  );
};

export default Footer;