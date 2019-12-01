

import * as React from 'react';
import { render } from 'react-native-testing-library'
import Page from '../Page/Page'

describe('OutsideTemp', () => {
    const { queryByTestId, getByTestId } = render(<Page selectedIcon={1} />);

    describe('rendering', () => {
        it('should display', () => {
            expect(queryByTestId('tempText')).toBeDefined()
            expect(getByTestId('tempText').props.children).toEqual("OUTSIDE")

            expect(queryByTestId("tempValue")).toBeDefined()
        })
    });
});