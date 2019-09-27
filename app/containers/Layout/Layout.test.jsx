import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Layout from "./Layout"

configure({ adapter: new Adapter() });

describe('App', () => {
    const layout = shallow(<Layout />);

    it('renders correctly', () => {
        expect(layout).toMatchSnapshot();
    });
});

