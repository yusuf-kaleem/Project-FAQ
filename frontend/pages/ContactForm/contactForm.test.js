import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactForm from './index' 
import React from 'react';


Enzyme.configure({ adapter: new Adapter() });

describe("ContactForm Tests",()=>{
    test("check if ContactForm render correctly",()=>{
        
        const wrapper = shallow(<ContactForm></ContactForm>)
        expect(wrapper.find({"data-testid":"form-container"}).exists()).toBeTruthy()

    })

  

})