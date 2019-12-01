import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Icon from './Icon'
import icons from './icons'

storiesOf("Icon", module)
    .add("Default Lighting", () => (
        <Icon
            selected={false}
            onSelected={() => { }}
            icon={icons[0]} />
    ))
    .add("Selected Lighting", () => (
        <Icon
            selected={true}
            onSelected={() => { }}
            icon={icons[0]} />
    ))
    .add("Default Heating", () => (
        <Icon
            selected={false}
            onSelected={() => { }}
            icon={icons[1]} />
    ))
    .add("Selected Heating", () => (
        <Icon
            selected={true}
            onSelected={() => { }}
            icon={icons[1]} />
    ))
    .add("Default Electric", () => (
        <Icon
            selected={false}
            onSelected={() => { }}
            icon={icons[2]} />
    ))
    .add("Selected Electric", () => (
        <Icon
            selected={true}
            onSelected={() => { }}
            icon={icons[2]} />
    ))
    .add("Default Gas", () => (
        <Icon
            selected={false}
            onSelected={() => { }}
            icon={icons[3]} />
    ))
    .add("Selected Gas", () => (
        <Icon
            selected={true}
            onSelected={() => { }}
            icon={icons[3]} />
    ))
    .add("Default Network", () => (
        <Icon
            selected={false}
            onSelected={() => { }}
            icon={icons[4]} />
    ))
    .add("Selected Network", () => (
        <Icon
            selected={true}
            onSelected={() => { }}
            icon={icons[4]} />
    ))
