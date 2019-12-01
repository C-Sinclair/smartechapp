import * as React from 'react';
import { render } from 'react-native-testing-library'
import App from './App'

export const add = (a: number, b: number) => a + b;

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 1)).toEqual(2);
    });
});

const createTestProps = (props: object) => ({
    ...props,
});

describe('App', () => {
    const props = createTestProps({});
    const { queryByTestId } = render(<App {...props} />);

    describe('rendering', () => {

        it('should display the <Header />', () => {
            expect(
                queryByTestId('header')
            ).not.toBeNull()
        })
    });
});