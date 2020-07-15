import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import App from './App'
import { findByTestAttr, testStore } from '../Utils/index'

configure({ adapter: new Adapter() });

const setUp = (initialState={}) => {
    const store = testStore(initialState)
    const wrapper = shallow(<App store={store} />).childAt(0).dive()
    return wrapper
}

describe('App Component', () => {

    let wrapper
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Exmaple Title 1',
                body: 'Some text'
            },{
                title: 'Exmaple Title 2',
                body: 'Some text'
            },{
                title: 'Exmaple Title 3',
                body: 'Some text'
            }]
        }
        wrapper = setUp(initialState)
    })

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent')
        expect(component.length).toBe(1)
    })

    it('exampleMethod_updateState Method should update state as expected', () => {
        const classInstance = wrapper.instance()
        classInstance.exampleMethod_updateState()
        const newState = classInstance.state.hideBtn
        expect(newState).toBe(true)
    })

    it('exampleMethod_returnsAValue Metod should return value as expected', () => {
        const classInstance = wrapper.instance()
        const newValue = classInstance.exampleMethod_returnsAValue(6)
        expect(newValue).toBe(7)
    })
})