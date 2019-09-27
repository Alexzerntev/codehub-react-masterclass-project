import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import RoundedImage from "./RoundedImage"

configure({ adapter: new Adapter() });

describe('App', () => {
    const roundedImage = shallow(<RoundedImage />);

    it('renders correctly', () => {
        expect(roundedImage).toMatchSnapshot();
    });
});

