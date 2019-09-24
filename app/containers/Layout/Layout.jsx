import React from "react";
import { Container } from "reactstrap";
import Header from "./Header/Header";
import Employees from "./Employees/Employees";
import Footer from "./Footer/Footer";

const Layout = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("user")
      .then(res => { setUser(res.data); });
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
