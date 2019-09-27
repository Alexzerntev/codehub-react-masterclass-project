import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import User from "./User"

configure({ adapter: new Adapter() });

describe('App', () => {
    const user = shallow(<User />);

    it('renders correctly', () => {
        expect(user).toMatchSnapshot();
    });
});

