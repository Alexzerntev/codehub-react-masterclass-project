import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

import Header from "./Header/Header";
import Employees from "./Employees/Employees";
import Footer from "./Footer/Footer";

import API from "../../utils/API";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Layout = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const user = await API.get("user");
        setUser(user.data);
      } catch (error) {
      }
    })();
  }, []);

  return (
    <Container>
      <Header user={user} />
      <ErrorBoundary>
        <Employees />
      </ErrorBoundary>
      <Footer user={user} />
    </Container>
  );
};

export default Layout;
