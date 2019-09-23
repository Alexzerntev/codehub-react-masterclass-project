import React from 'react';

import TextInput from '../../../../components/Inputs/TextInput';
import SelectInput from '../../../../components/Inputs/SelectInput';

import "./EmployeeDetails.css"



const EmployeeDetails = ({ selectedEmployee }) => {
  return (
    <div className="employee-details">
      {selectedEmployee ? (
        <>
          <h3>
            {selectedEmployee.id}:{" "}
            {`${selectedEmployee.firstName} ${selectedEmployee.lastName}`} (
                    {selectedEmployee.department})
                  </h3>
          <form onSubmit={this.onFormSubmit}>
            <TextInput
              id="firstName"
              label="First Name:"
              value={selectedEmployee.firstName}
              onChange={this.onInputChange}
            />
            {/* <div className="form-group">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={selectedEmployee.firstName}
                onChange={this.onInputChange}
              />
            </div> */}

            <TextInput
              id="lastName"
              label="Last Name:"
              value={selectedEmployee.lastName}
              onChange={this.onInputChange}
            />

            {/* <div className="form-group">
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={selectedEmployee.lastName}
                onChange={this.onInputChange}
              />
            </div> */}

            <SelectInput
              id="gender"
              label="Gender:"
              onChange={this.onSelectChange}
              options={["male", "female"]}
            />

            {/* <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                className="form-control"
                onChange={this.onSelectChange}
              >
                <option>male</option>
                <option>female</option>
              </select>
            </div> */}

            < TextInput
              id="email"
              label="Email:"
              value={selectedEmployee.email}
              onChange={this.onInputChange}
            />

            {/* <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={selectedEmployee.email}
                onChange={this.onInputChange}
              />
            </div> */}

            < TextInput
              id="phone"
              label="Phone:"
              value={selectedEmployee.phone}
              onChange={this.onInputChange}
            />

            {/* <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={selectedEmployee.phone}
                onChange={this.onInputChange}
              />
            </div> */}

            < TextInput
              id="mobile"
              label="Mobile:"
              value={selectedEmployee.mobile}
              onChange={this.onInputChange}
            />

            {/* <div className="form-group">
              <label htmlFor="mobile">Mobile:</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                value={selectedEmployee.mobile}
                onChange={this.onInputChange}
              />
            </div> */}

            < TextInput
              id="age"
              label="Age:"
              value={selectedEmployee.age}
              onChange={this.onInputChange}
            />

            {/* <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                value={selectedEmployee.age}
                onChange={this.onInputChange}
              />
            </div> */}

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