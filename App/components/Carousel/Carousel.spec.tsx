import * as React from 'react';
import Carousel from 'react-native-snap-carousel'
import { render, fireEvent } from 'react-native-testing-library'
import Page from '../Page/Page'
import CarouselComponent, { carouselOptions as options } from './Carousel'

describe('Carousel', () => {
    const { getByType } = render(<Page selectedIcon={1} />);

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
        const eventData = {
            nativeEvent: {
                contentOffset: {
                    y: 200,
                },
            },
        }
        const { getByTestId } = render(<CarouselComponent selected={1} setSelected={jest.fn()} />)

        it('should change selected on swipe', () => {
            fireEvent.scroll(getByTestId("carousel"))
            expect(getByTestId("carousel").props.selected).not.toBe(1)
        })

        it('should update values on change', () => {
            fireEvent.scroll(getByTestId("carousel"), eventData)
            expect(getByTestId("humidValue")).not.toBe("44%")
            expect(getByTestId("tempValue")).not.toBe("14°")
        })
    })
});