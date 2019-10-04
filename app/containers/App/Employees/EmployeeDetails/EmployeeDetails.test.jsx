import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import EmployeeDetails from "./EmployeeDetails"

configure({ adapter: new Adapter() });

describe('Employee Details', () => {
    const employeeDetails = shallow(<EmployeeDetails />);

    it('renders correctly', () => {
        expect(employeeDetails).toMatchSnapshot();
    });

});

