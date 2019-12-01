import * as React from 'react'
import { Image, TouchableOpacity, ImageSourcePropType, Dimensions } from 'react-native'

type IconProps = {
    selected: Boolean,
    onSelected: Function,
    icon: {
        id: number,
        name: String,
        images: {
            default: ImageSourcePropType,
            selected: ImageSourcePropType
        },
        component: () => Element
    }
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {

    const pressed = () => {
        if (!props.selected) {
            props.onSelected(props.icon)
        }
    }

    return (
        <TouchableOpacity testID="clickContainer" onPress={() => pressed()}>

            <Image
                style={{
                    width: Dimensions.get("window").width / 7,
                    height: Dimensions.get("window").width / 7
                }}
                source={
                    props.selected
                        ? props.icon.images.selected
                        : props.icon.images.default
                } />
        </TouchableOpacity>
    )
}

export default Icon