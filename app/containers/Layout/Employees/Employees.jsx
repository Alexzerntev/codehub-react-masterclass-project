import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import API from "../../../utils/API";
import EmployeeList from "./EmployeeList/EmployeeList";

import "./Employees.css";
import EmployeeDetails from "./EmployeeDetails/EmployeeDetails";

class Employees extends Component {
  state = {
    employees: [],
    selectedEmployee: null,
  };

  async componentDidMount() {
    const employees = await API.get("employees");

    this.setState({ employees: employees.data });
  }

  onSelectEmployee = (e, id) => {
    e.preventDefault();
    const selectedEmployee = this.state.employees.find((employee) => employee.id === id);

    this.setState({ selectedEmployee });
  };

  onInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({ selectedEmployee: { ...this.state.selectedEmployee, [name]: value } });
  };

  onSelectChange = (e) => {
    const { value } = e.target;

    this.setState({ selectedEmployee: { ...this.state.selectedEmployee, gender: value } });
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    const { id, ...rest } = this.state.selectedEmployee;
    await API.put(`employees/${id}`, rest);
    const employees = await API.get("employees");

    this.setState({ employees: employees.data });
  };

  render() {
    const { employees, selectedEmployee } = this.state;

    return (
      <Row>
        <Col xs={12}>
          <div className="employees-container">
            <EmployeeList employees={employees} />
            <EmployeeDetails selectedEmployee={selectedEmployee} />
          </div>
        </Col>
      </Row>
    );
  }
}

export default Employees;
