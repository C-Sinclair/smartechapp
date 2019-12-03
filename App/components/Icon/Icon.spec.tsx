import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { render, fireEvent } from 'react-native-testing-library'
import Icon from './Icon'
import Page from '../Page/Page'
import icons from './icons'

const createTestProps = (props?: object) => ({
    selectedIcon: 0,
    ...props
})

describe('Header', () => {

    describe('rendering', () => {

        it('should display selected version when selected', () => {
            let props = {
                selected: true,
                icon: icons[2],
                onSelected: jest.fn()
            }
            const { getByType } = render(<Icon {...props} />)

            expect(getByType(Image).props.source).toEqual(
                require('../../../assets/icons/connections-selected.png')
            )
        })

        it('should display default version when not selected', () => {
            let props = {
                selected: false,
                icon: icons[0],
                onSelected: jest.fn()
            }
            const { getByType } = render(<Icon {...props} />)

            expect(getByType(Image).props.source).toEqual(
                require('../../../assets/icons/bulb-default.png')
            )
        })
    });

    describe('events', () => {

        it('should switch selected/default icon when icon is clicked', () => {
            let onSelected = jest.fn()
            let props = {
                selected: false,
                icon: icons[0],
                onSelected
            }
            const { getByTestId } = render(<Icon {...props} />)
            fireEvent.press(getByTestId('clickContainer'))

            expect(onSelected).toHaveBeenCalledWith(icons[0])
        })

        it('should unselect other icons when icon is clicked', () => {
            const { getAllByType } = render(<Page {...createTestProps()} />)

            expect(getAllByType(Icon).filter(icon => icon.props.selected == true)).toHaveLength(1)

            let unselectedIcon = getAllByType(Icon).filter(icon => icon.props.selected == false)[0]
            fireEvent.press(unselectedIcon.findByType(TouchableOpacity))

            expect(unselectedIcon).toEqual(getAllByType(Icon).filter(icon => icon.props.selected == true)[0])

            expect(getAllByType(Icon).filter(icon => icon.props.selected == true)).toHaveLength(1)
        })

        it('should switch which screen is showing when icon is clicked', () => {
            const { getAllByType, getByTestId } = render(<Page {...createTestProps()} />)

            let unselectedIcon = getAllByType(Icon).filter(icon => icon.props.icon.name == "centralheating")[0]
            fireEvent.press(unselectedIcon.findByType(TouchableOpacity))

            expect(getByTestId("heating")).toBeDefined()
        })
    })
});