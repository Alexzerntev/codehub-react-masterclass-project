import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

import Header from "../../components/Header/Header";
import Employees from "./Employees/Employees";
import Footer from "../../components/Footer/Footer";

import API from "../../utils/API";

const App = () => {

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
        <Employees />
      <Footer user={user} />
    </Container>
  );
};

export default App;