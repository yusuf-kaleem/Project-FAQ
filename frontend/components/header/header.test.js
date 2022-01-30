import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header' 
import React from 'react';


Enzyme.configure({ adapter: new Adapter() });

describe("Header Tests",()=>{
    test("check if header render correctly",()=>{
        
        let logo_alt_text = "Lieferando logo"
        const wrapper = shallow(<Header></Header>)
        expect(wrapper.find({"data-testid":"logo"}).prop("alt")).toBe(logo_alt_text)

    })
})