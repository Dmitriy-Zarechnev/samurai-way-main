import {create} from 'react-test-renderer'
import React from 'react'

describe('Component', () => {
    test('Matches', () => {
        const div = create(<div/>)
        expect(div.toJSON()).toMatchSnapshot()
    })
})