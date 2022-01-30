import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Help_center from './help_center' 
import React from 'react';


Enzyme.configure({ adapter: new Adapter() });

describe("Help_center Tests",()=>{
    test("check if Help_center render correctly",()=>{
        
        let title = "Help Center"
        const wrapper = shallow(<Help_center></Help_center>)
        expect(wrapper.find({"data-testid":"title"}).text()).toBe(title)

    })

    test("check if Help_center has 'Contact Forms' section",()=>{
        
        const wrapper = shallow(<Help_center></Help_center>)
        expect(wrapper.html().includes('Contact Forms')).toBe(true);


    })


    test("check if Help_center has 'Where is my order' section",()=>{
        
        const wrapper = shallow(<Help_center></Help_center>)
        expect(wrapper.html().includes('Where is my order')).toBe(true);


    })
})