import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Carousel from './Carousel'

storiesOf("Carousel", module)
    .add("Left", () => (
        <Carousel selected={0} setSelected={() => { }} />
    ))
    .add("Centre", () => (
        <Carousel selected={1} setSelected={() => { }} />
    ))
    .add("Right", () => (
        <Carousel selected={2} setSelected={() => { }} />
    ))
