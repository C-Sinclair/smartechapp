import * as React from 'react';
import { Text } from 'react-native'
import { shallow, ShallowWrapper } from 'enzyme'
import Header from './Header'

const menuWhite = require('../../../assets/icons/menu-white.png')
const cogWheel = require('../../../assets/icons/cogwheel-white.png')

const createTestProps = (props: object) => ({

    ...props
})

describe('Header', () => {
    let props: Object
    let wrapper: ShallowWrapper

    beforeEach(() => {
        props = createTestProps({})
        wrapper = shallow(<Header {...props} />);
    })

    describe('rendering', () => {

        it('should display "menu-white.png"', () => {
            let menu = wrapper.find("menu")
            expect(menu).toHaveLength(1)
            expect(menu.prop("source")).toEqual(menuWhite)
        });

        it('should display "UTILITIES"', () => {
            let title = wrapper.find('title')
            expect(title).toHaveLength(1)
            expect(title).toContain(<Text>UTILITIES</Text>)
        })

        it('should display "cogwheel-white.png"', () => {
            let cog = wrapper.find("settings")
            expect(cog).toHaveLength(1)
            expect(cog.prop("source")).toEqual(cogWheel)
        })
    });
});