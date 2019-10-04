import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Employees from "./Employees"

configure({ adapter: new Adapter() });

describe('App', () => {
    const employees = shallow(<Employees />);

    it('renders correctly', () => {
        expect(employees).toMatchSnapshot();
    });
});

