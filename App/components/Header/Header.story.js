import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Header from './Header'

storiesOf("Header", module)
    .add("Default", () => (
        <Header />
    ))
