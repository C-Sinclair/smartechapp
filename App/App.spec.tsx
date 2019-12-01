import * as React from 'react';
import { shallow } from 'enzyme';
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
    const wrapper = shallow(<App {...props} />);

    describe('rendering', () => {
        it('should render a <View />', () => {
            expect(wrapper.find('View')).toHaveLength(1);
        });
    });
});