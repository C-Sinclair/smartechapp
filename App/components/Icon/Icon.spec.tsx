import * as React from 'react';
import { TouchableOpacity } from 'react-native'
import { render, fireEvent } from 'react-native-testing-library'
import Icon from './Icon'
import Page from '../Page/Page'

const createTestProps = (props?: object) => ({
    ...props
})

describe('Header', () => {

    describe('rendering', () => {

        it('should display selected version when selected', () => {
            let props = createTestProps({
                selected: true,
                icon: 'connections',
                onSelected: jest.fn()
            })
            const { getByName } = render(<Icon {...props} />)

            expect(
                getByName('Image')
            ).toEqual(
                require('../../../assets/icons/connections-selected.png')
            )
        })

        it('should display default version when not selected', () => {
            let props = createTestProps({
                selected: false,
                icon: 'bulb',
                onSelected: jest.fn()
            })
            const { getByName } = render(<Icon {...props} />)

            expect(
                getByName('Image')
            ).toEqual(
                require('../../../assets/icons/bulb-default.png')
            )
        })
    });

    describe('events', () => {

        it('should switch selected/default icon when icon is clicked', () => {
            let onSelected = jest.fn()
            let props = createTestProps({
                selected: false,
                icon: 'bulb',
                onSelected
            })
            const { getByTestId } = render(<Icon {...props} />)
            fireEvent.press(getByTestId('clickContainer'))

            expect(onSelected).toHaveBeenCalledWith("bulb")
        })

        it('should unselect other icons when icon is clicked', () => {
            const { getAllByName } = render(<Page {...createTestProps()} />)

            expect(getAllByName(Icon).filter(icon => icon.props.selected == false).length).toHaveLength(1)

            let unselectedIcon = getAllByName(Icon).filter(icon => icon.props.selected == false)[0]
            fireEvent.press(unselectedIcon.findByType(TouchableOpacity))

            expect(unselectedIcon).toEqual(getAllByName(Icon).filter(icon => icon.props.selected == true))
            expect(getAllByName(Icon).filter(icon => icon.props.selected == false).length).toHaveLength(1)
        })

        it('should switch which screen is showing when icon is clicked', () => {
            const { getAllByName, getByTestId } = render(<Page {...createTestProps()} />)

            let currentScreen = getByTestId("content")

            let unselectedIcon = getAllByName(Icon).filter(icon => icon.props.selected == false)[0]
            fireEvent.press(unselectedIcon.findByType(TouchableOpacity))

            expect(currentScreen).not.toEqual(getByTestId("content"))
        })
    })
});