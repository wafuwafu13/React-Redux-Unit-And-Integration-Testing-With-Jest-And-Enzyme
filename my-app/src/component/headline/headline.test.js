import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Headline from './index'
import { findByTestAttr, checkProps } from '../../../Utils/index'

configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>)
    return component
}

describe('Headline Component', () => {

    describe('Checking Prop Types', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            }
            //const propsErr = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name)
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

    describe('Have props', () => {

        let wrapper
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setUp(props)
        })

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(1)
        })

        it('Should render a H1', () => {
            const h1 = findByTestAttr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })

        it('Shoud render a desc', () => {
            const desc = findByTestAttr(wrapper, 'desc')
            expect(desc.length).toBe(1)
        })

    })

    describe('Have NO props', () => {

        let wrapper
        beforeEach(() => {
            wrapper = setUp()
        })

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)
        })

    })
})