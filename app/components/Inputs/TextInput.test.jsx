import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TextInput from "./TextInput"

configure({ adapter: new Adapter() });

describe('App', () => {
    const textInput = shallow(<TextInput />);

    it('renders correctly', () => {
        expect(textInput).toMatchSnapshot();
    });
});

