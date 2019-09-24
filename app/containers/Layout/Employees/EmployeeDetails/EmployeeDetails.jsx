import React from 'react';

import TextInput from '../../../../components/Inputs/TextInput';
import SelectInput from '../../../../components/Inputs/SelectInput';
import API from '../../../../utils/API';


const EmployeeDetails = ({ selectedEmployee, setEmployees, setSelectedEmployee }) => {

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setSelectedEmployee({ ...selectedEmployee, [name]: value });
  };

  const onSelectChange = (e) => {
    const { value } = e.target;
    setSelectedEmployee({ ...selectedEmployee, gender: value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const { id, ...rest } = selectedEmployee;

    await API.put(`employees/${id}`, rest);
    const employees = await API.get("employees");

    setEmployees(employees.data);
  };

  return (
    <div className="employee-details">
      {selectedEmployee ? (
        <>
          <h3>
            {selectedEmployee.id}:{" "}
            {`${selectedEmployee.firstName} ${selectedEmployee.lastName}`} (
                    {selectedEmployee.department})
                  </h3>
          <form onSubmit={onFormSubmit}>
            <TextInput
              id="firstName"
              label="First Name:"
              value={selectedEmployee.firstName}
              onChange={(e) => onInputChange(e)}
            />

            <TextInput
              id="lastName"
              label="Last Name:"
              value={selectedEmployee.lastName}
              onChange={(e) => onInputChange(e)}
            />

            <SelectInput
              id="gender"
              label="Gender:"
              onChange={onSelectChange}
              value={selectedEmployee.gender}
              options={["male", "female"]}
            />

            < TextInput
              id="email"
              label="Email:"
              value={selectedEmployee.email}
              onChange={(e) => onInputChange(e)}
            />

            < TextInput
              id="phone"
              label="Phone:"
              value={selectedEmployee.phone}
              onChange={(e) => onInputChange(e)}
            />

            < TextInput
              id="mobile"
              label="Mobile:"
              value={selectedEmployee.mobile}
              onChange={(e) => onInputChange(e)}
            />

            < TextInput
              id="age"
              label="Age:"
              value={selectedEmployee.age}
              onChange={(e) => onInputChange(e)}
            />

            < button type="submit" className="btn btn-primary float-sm-right" >
              Submit
            </button>
          </form>
        </>
      ) : (<h3>Please select a user to view edit his data...</h3>)}
    </div>
  );
};

export default EmployeeDetails;