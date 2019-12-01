import * as React from 'react';
import Carousel from 'react-native-snap-carousel'
import { render } from 'react-native-testing-library'
import Page from '../Page/Page'
import { carouselOptions as options } from './Carousel'

describe('Carousel', () => {
    const { getByType, getByTestId } = render(<Page selectedIcon={1} />);

    describe('rendering', () => {

        it('should display selected at forefront', () => {
            expect(getByType(Carousel).props.firstItem).toBe(1)
        })

        it('should display options', () => {
            expect(getByType(Carousel).props.data).toEqual(options)
        })
    });

    describe('events', () => {

        it('should change selected on swipe', () => {
            getByTestId("carousel").props.onSnapToItem(0)
            expect(getByTestId("carousel").props.selected).not.toBe(1)
        })

        it('should update values on change', () => {
            getByTestId("carousel").props.onSnapToItem(0)
            expect(getByTestId("humidValue")).not.toBe("44%")
        })
    })
});