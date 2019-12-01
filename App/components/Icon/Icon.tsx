import * as React from 'react'
import { Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { IconProps } from './IconTypes'
import colours from '../../themes/Colours'

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {

    const pressed = () => {
        if (!props.selected) {
            props.onSelected(props.icon)
        }
    }

    return (
        <TouchableOpacity
            testID="clickContainer"
            onPress={() => pressed()}
            style={
                props.selected
                    ? styles.selected
                    : styles.default
            }>
            <Image
                fadeDuration={0}
                style={styles.image}
                source={
                    props.selected
                        ? props.icon.images.selected
                        : props.icon.images.default
                } />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get("window").width / 7,
        height: Dimensions.get("window").width / 7
    },
    default: {
        padding: 10,
    },
    selected: {
        padding: 10,
        borderColor: colours.hot,
        borderWidth: 3
    }
})

export default Icon