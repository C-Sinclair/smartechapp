

import * as React from 'react';
import { render } from 'react-native-testing-library'
import Page from '../Page/Page'

describe('OutsideTemp', () => {
    const { queryByTestId } = render(<Page selectedIcon={1} />);

    describe('rendering', () => {
        it('should display', () => {
            expect(queryByTestId('tempText')).toBeDefined()
            expect(queryByTestId("tempValue")).toBeDefined()
        })
    });
});