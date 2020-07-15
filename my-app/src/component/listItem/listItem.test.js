import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAttr, checkProps } from '../../../Utils/index'
import ListItem from './index'

configure({ adapter: new Adapter() });

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some Text'
            }
            const propError = checkProps(ListItem, expectedProps)
            expect(propError).toBeUndefined()
        })
    })

    describe('Component Renders', () => {

        let wrapper
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some Text'
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it('Should renders without error', () => {
            const componet = findByTestAttr(wrapper, 'listItemComponent')
            expect(componet.length).toBe(1)
        })

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle')
            expect(title.length).toBe(1)
        })

        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc')
            expect(desc.length).toBe(1)
        })
    })

    describe('Should not render', () => {

        let wrapper
        beforeEach(() => {
            const props = {
                desc: 'Some Text'
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it('Component is not rendered', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(0)
        })

    })
})