import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library'
import Dial from './Dial'
import FastImage from 'react-native-fast-image';

describe('Dial', () => {

    describe('rendering', () => {

        it('should display correct image for temperature', () => {
            const { getByType } = render(<Dial temp={24} setTemp={jest.fn()} />);
            expect(getByType(FastImage).props.source).toEqual(require('../../../assets/png/240.png'))
        })

        it('should display temperature figure', () => {
            const { getByTestId } = render(<Dial temp={24} setTemp={jest.fn()} />);
            const value = getByTestId("tempFigure").props.children[0]
            expect(value).toEqual(24)
        })
    });

    describe('events', () => {

        it('should change temperature on +/- button press', () => {
            const { getByTestId } = render(<Dial temp={24} setTemp={jest.fn()} />);
            fireEvent.press(getByTestId("plus"))
            expect(getByTestId("tempFigure").props.children[0]).toEqual(25)

            fireEvent.press(getByTestId("minus"))
            expect(getByTestId("tempFigure").props.children[0]).toEqual(24)
        })

        it('should adjust temperature on touch of dial', () => {
            // struggling to find a solid way of implementing tests for this
            const fn = jest.fn
            const { getByTestId } = render(<Dial temp={24} setTemp={fn()} />)

            fireEvent.scroll(getByTestId("sliderSVG"))

            expect(fn).toBeCalled()
        })

        it('should not be able to go below 0 or above 360', () => {
            const minus = () => {
                const { getByTestId } = render(<Dial temp={0} setTemp={jest.fn()} />);
                fireEvent.press(getByTestId("minus"))
                expect(getByTestId("tempFigure").props.children[0]).toEqual(0)
            }
            const plus = () => {
                const { getByTestId } = render(<Dial temp={36} setTemp={jest.fn()} />);
                fireEvent.press(getByTestId("plus"))
                expect(getByTestId("tempFigure").props.children[0]).toEqual(36)
            }
            minus()
            plus()
        })

        it('should produce clicking sound on temperature change', () => {
            // nice to have UX for the future
        })
    })
});