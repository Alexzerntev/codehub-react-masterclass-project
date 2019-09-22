import React from 'react';
import EmployeeListItem from '../../../../components/Employees/EmpoyeeListItem/EmployeeListItem';

import './EmployeeList.css'

const EmployeeList = ({ employees }) => {
  return (
    <div className="employees-list">
      <ul>
        {employees.length &&
          employees.map((employee) => (
            <EmployeeListItem key={employee.id} employee={employee} />
          ))}
      </ul>
    </div>
  );
};

export default EmployeeList;