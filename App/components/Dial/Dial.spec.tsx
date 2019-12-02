import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library'
import Dial from '../Dial/Dial'
import SpriteSheet from 'rn-sprite-sheet'

describe('Dial', () => {

    describe('rendering', () => {

        it('should display correct image for temperature', () => {
            const { getByType } = render(<Dial temp={24} />);
            expect(getByType(SpriteSheet).props.source).toEqual(require('../../../assets/sprite.png'))
        })

        it('should display temperature figure', () => {
            const { getByTestId } = render(<Dial temp={24} />);
            expect(getByTestId("tempFigure").props.children).toEqual("24°")
        })
    });

    describe('events', () => {

        it('should change temperature on +/- button press', () => {
            const { getByTestId } = render(<Dial temp={24} />);
            fireEvent.press(getByTestId("plus"))
            expect(getByTestId("tempFigure").props.children).toEqual("25°")

            fireEvent.press(getByTestId("minus"))
            expect(getByTestId("tempFigure").props.children).toEqual("24°")
        })

        it('should adjust temperature on touch of dial', () => {

        })

        it('should not be able to go below 0 or above 360', () => {
            const minus = () => {
                const { getByTestId } = render(<Dial temp={0} />);
                fireEvent.press(getByTestId("minus"))
                expect(getByTestId("tempFigure").props.children).toEqual("0°")
            }
            const plus = () => {
                const { getByTestId } = render(<Dial temp={360} />);
                fireEvent.press(getByTestId("plus"))
                expect(getByTestId("tempFigure").props.children).toEqual("360°")
            }
            minus()
            plus()
        })

        it('should produce clicking sound on temperature change', () => {

        })
    })
});