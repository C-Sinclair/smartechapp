import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library'
import Page from '../Page/Page'
import Carousel from './Carousel'

describe('Carousel', () => {
    const options = ["Living Room", "Kitchen", "Bedroom"]
    const { getByType, getByTestId } = render(<Page selectedIcon={1} />);

    describe('rendering', () => {

        it('should display selected at forefront', () => {
            // default second item in array to display
            expect(getByType(Carousel).props.firstItem).toBe(1)
        })

        it('should display options', () => {
            expect(getByType(Carousel).props.data).toEqual(options)
        })
    });

    describe('events', () => {

        it('should change selected on swipe', () => {
            fireEvent.scroll(getByType(Carousel))
            expect(getByType(Carousel).props.selected).not.toBe(1)
        })

        it('should update values on change', () => {
            fireEvent.scroll(getByType(Carousel))
            expect(getByTestId("humidValue")).not.toBe("44%")
            expect(getByTestId("tempValue")).not.toBe("14°")
        })
    })
});