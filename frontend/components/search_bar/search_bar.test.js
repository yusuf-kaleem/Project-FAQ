import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search_bar from './search_bar' 
import React from 'react';


Enzyme.configure({ adapter: new Adapter() });

describe("Search_bar Tests",()=>{
    test("check if Search_bar render placeholder correctly",()=>{
        const placeholder = "random text"
        const wrapper = shallow(<Search_bar  input={null} setKeyword={()=>{}}  placeholder={placeholder}></Search_bar>)
        //console.log(wrapper.debug())
        expect(wrapper.find({"data-testid":"search-input"}).prop("placeholder")).toBe(placeholder)

    })
})