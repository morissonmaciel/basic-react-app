import React from "react";
import { shallow } from "enzyme";
import { Home } from "./Home";

it("Should render Home correctly", () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper).toMatchSnapshot();
});
