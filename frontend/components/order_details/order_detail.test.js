import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Order_detail from './order_detail' 
import React from 'react';


Enzyme.configure({ adapter: new Adapter() });

describe("Order_detail Tests",()=>{
    test("check if Order_detail render correctly with data",()=>{
        
        let order = [{reference: 'TIS143', date: '2020-01-11T00:00:00.000Z', delivered: true, cost: 18.8}]
        const wrapper = shallow(<Order_detail order={order}></Order_detail>)
        expect(wrapper.find({"data-testid":"data-container"}).exists()).toBeTruthy()

    })

    test("check if Order_detail render correctly without data",()=>{
        
        let order = []
        const wrapper = shallow(<Order_detail order={order}></Order_detail>)
        expect(wrapper.find({"data-testid":"no-data-container"}).exists()).toBeTruthy()

    })

})