import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

import Header from "./Header/Header";
import Employees from "./Employees/Employees";
import Footer from "./Footer/Footer";

import API from "../../utils/API";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Layout = () => {

  const [user, setUser] = useState(null);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const user = API.get("user");
        setUser(user.data);
        setHasError(false);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, []);

  return (
    <Container>
      <ErrorBoundary hasError={hasError}>
        <Header user={user} />
        <ErrorBoundary>
          <Employees />
        </ErrorBoundary>
        <Footer user={user} />
      </ErrorBoundary>
    </Container>
  );
};

export default Layout;
