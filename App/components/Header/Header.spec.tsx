import * as React from 'react';
import { Image } from 'react-native'
import { mount } from 'enzyme'
import { render } from 'react-native-testing-library'
import Header from './Header'

const menuWhite = require('../../../assets/icons/menu-white.png')
const cogWheel = require('../../../assets/icons/cogwheel-white.png')

const createTestProps = (props?: object) => ({
    ...props
})

describe('Header', () => {
    let props = createTestProps()
    const wrapper = mount(<Header {...props} />)
    const { getByTestId } = render(<Header {...props} />)

    describe('rendering', () => {

        it('should display "menu-white.png"', () => {
            let menu = wrapper.find(Image).first()
            expect(menu).toHaveLength(1)
            expect(menu.prop("source")).toEqual(menuWhite)

            let m = getByTestId('menu')
            expect(m.props.source).toEqual(menuWhite)
        });

        it('should display "UTILITIES"', () => {
            let title = getByTestId("title")
            expect(title.props.children).toEqual("UTILITIES")
        })

        it('should display "cogwheel-white.png"', () => {
            let cog = getByTestId("settings")
            expect(cog.props.source).toEqual(cogWheel)
        })
    });
});