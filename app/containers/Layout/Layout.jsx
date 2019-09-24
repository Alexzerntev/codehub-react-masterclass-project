import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

import Header from "./Header/Header";
import Employees from "./Employees/Employees";
import Footer from "./Footer/Footer";

import API from "../../utils/API";

const Layout = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const user = API.get("user");
      setUser(user.data);
    })();
  }, []);

  return (
    <Container>
      <Header user={user} />
      <Employees />
      <Footer user={user} />
    </Container>
  );
};

export default Layout;
