import * as React from 'react';
import { render } from 'react-native-testing-library'
import Page from '../Page/Page'

describe('Carousel', () => {
    const { getByTestId } = render(<Page selectedIcon={1} />);

    describe('rendering', () => {

        it('should display selected at forefront', () => {

        })

        it('should display options', () => {
            let options = ["Living Room", "Kitchen", "Bedroom"]
        })
    });

    describe('events', () => {

        it('should change selected on swipe', () => {

        })

        it('should update values on change', () => {

        })
    })
});