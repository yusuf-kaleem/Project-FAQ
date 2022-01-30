import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './footer' 
import React from 'react';


Enzyme.configure({ adapter: new Adapter() });

describe("Footer Tests",()=>{
    test("check if footer render correctly",()=>{
        
        let title = "Takeaway.com"
        const wrapper = shallow(<Footer title={title}></Footer>)
        expect(wrapper.find({"data-testid":"title"}).text()).toBe(title)

    })
})