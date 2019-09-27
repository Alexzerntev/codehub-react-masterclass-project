import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Header from "./Header"

configure({ adapter: new Adapter() });

describe('App', () => {
    const header = shallow(<Header />);

    it('renders correctly', () => {
        expect(header).toMatchSnapshot();
    });
});

