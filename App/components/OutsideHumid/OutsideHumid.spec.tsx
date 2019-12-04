import * as React from 'react';
import { render } from 'react-native-testing-library'
import Page from '../Page/Page'

describe('OutsideHumid', () => {
    const { queryByTestId, getByTestId } = render(<Page selectedIcon={1} />);

    describe('rendering', () => {
        it('should display', () => {
            expect(queryByTestId('humidText')).toBeDefined()
            expect(getByTestId('humidText').props.children).toEqual("HUMIDITY")

            expect(queryByTestId("humidValue")).toBeDefined()
        })
    });
});