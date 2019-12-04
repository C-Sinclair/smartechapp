import * as React from 'react';
import { render } from 'react-native-testing-library'
import Page from './Page'

const createTestProps = (props?: object) => ({
    selectedIcon: 0,
    ...props,
});

describe('Page', () => {
    const { queryByTestId } = render(<Page {...createTestProps()} />)

    describe('rendering', () => {
        it('should display the <Header />', () => {
            expect(
                queryByTestId('header')
            ).not.toBeNull()
        })
    });
});