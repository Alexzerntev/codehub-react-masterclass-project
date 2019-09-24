import React, { useState, useEffect } from "react";

import API from "../../../utils/API";
import User from "../../../components/User/User";


const Header = ({ user }) => {
  return (
    <User user={user}></User>
  );
};

export default Header;
