import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card' 
import React from 'react';


Enzyme.configure({ adapter: new Adapter() });

describe("Card Tests",()=>{
    test("check if render correctly with different names",()=>{
        
        let title = "Contact Form"
        const wrapper = shallow(<Card title={title}></Card>)
        expect(wrapper.find({"data-testid":"title"}).text()).toBe(title)

    })
})