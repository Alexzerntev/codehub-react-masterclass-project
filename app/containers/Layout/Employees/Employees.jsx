import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import API from "../../../utils/API";
import EmployeeList from "./EmployeeList/EmployeeList";
import EmployeeDetails from "./EmployeeDetails/EmployeeDetails";

const Employees = () => {

  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    // Immediately invoked function
    (async () => {
      const employees = await API.get("employees");
      setEmployees(employees.data);
    })();
  }, []);

  const onSelectEmployee = (e, id) => {
    e.preventDefault();

    const selectedEmployee = employees
      .find((employee) => employee.id === id);

    setSelectedEmployee(selectedEmployee);
  };

  return (
    <Row>
      <Col xs={12}>
        <div className="employees-container">
          <EmployeeList
            employees={employees}
            onSelectEmployee={onSelectEmployee} />
          <EmployeeDetails
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee}
            setEmployees={setEmployees}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Employees;