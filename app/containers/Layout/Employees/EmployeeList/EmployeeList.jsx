import React from 'react';
import EmployeeListItem from '../../../../components/Employees/EmpoyeeListItem/EmployeeListItem';

const EmployeeList = ({ employees, onSelectEmployee }) => {
  return (
    <div className="employees-list">
      <ul>
        {employees.length &&
          employees.map((employee) => (
            <li key={employee.id} className="employee-list-item">
              <EmployeeListItem employee={employee} onSelectEmployee={onSelectEmployee} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EmployeeList;