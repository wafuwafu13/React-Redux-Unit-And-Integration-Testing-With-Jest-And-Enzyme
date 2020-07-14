import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Header from './index'
import { findByTestAttr } from '../../../Utils/index'

configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>)
    return component
}

describe('Header Component', () => {

    let component
    beforeEach(() => {
        component = setUp()
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    it('Should render a logo', () => {
        const logo = findByTestAttr(component, 'LogoIMG')
        expect(logo.length).toBe(1)
    })

})