import React, { useState, useEffect } from "react";

import API from "../../../utils/API"
import User from "../../../components/User/User";


const Header = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("user")
      .then(res => { setUser(res.data); });
  }, []);


  return (
    <User user={user}></User>
  );
};

export default Header;
