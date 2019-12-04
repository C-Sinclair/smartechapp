import { ImageSourcePropType } from 'react-native'

export type IconType = {
    id: number,
    name: String,
    images: {
        default: ImageSourcePropType,
        selected: ImageSourcePropType
    }
}

export type IconProps = {
    selected: Boolean,
    onSelected: Function,
    icon: IconType
}