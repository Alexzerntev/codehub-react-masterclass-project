import React from 'react';
import RoundedImage from '../../RoundedImage/RoundedImage';

const EmployeeListItem = ({ employee, onSelectEmployee }) => {

  return (
    <a href="#" onClick={(e) => onSelectEmployee(e, employee.id)}>
      <div className="img">
        <RoundedImage
          size="70"
          imgPath={employee.picture}
          name={`${employee.firstName} ${employee.lastName} photo`}
        />
      </div>
      <div className="info">
        <p className="name">{`${employee.firstName} ${employee.lastName}`}</p>
        <p className="email">{employee.email}</p>
      </div>
    </a>
  );
};

export default EmployeeListItem;