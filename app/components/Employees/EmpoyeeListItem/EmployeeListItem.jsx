import React from 'react';
import RoundedImage from '../../RoundedImage/RoundedImage';

const EmployeeCard = ({ employee }) => {
  return (
    <li className="employee-list-item" >
      <a href="#" onClick={(e) => this.onSelectEmployee(e, employee.id)}>
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
    </li >
  );
};

export default EmployeeCard;