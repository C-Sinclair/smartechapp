import * as React from "react"
import { View, Image, Text } from 'react-native'

const menuWhite = require('../../../assets/icons/menu-white.png')
const cogWheel = require('../../../assets/icons/cogwheel-white.png')

const Header: React.FunctionComponent<{}> = () => {

    return (
        <View>
            <Image testID="menu" source={menuWhite} />
            <Text testID="title">UTILITIES</Text>
            <Image testID="settings" source={cogWheel} />
        </View>
    )
}

export default Header