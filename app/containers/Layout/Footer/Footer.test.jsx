import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Footer from "./Footer"

configure({ adapter: new Adapter() });

describe('App', () => {
    const footer = shallow(<Footer />);

    it('renders correctly', () => {
        expect(footer).toMatchSnapshot();
    });
});

