import * as React from "react"
import { View, Image, Text } from 'react-native'

const menuWhite = require('../../../assets/icons/menu-white.png')
const cogWheel = require('../../../assets/icons/cogwheel-white.png')

const Header: React.FunctionComponent<{}> = () => {

    return (
        <View testID="header" style={styles.container}>
            <Image testID="menu" source={menuWhite} />
            <Text testID="title" style={styles.title}>UTILITIES</Text>
            <Image testID="settings" source={cogWheel} />
        </View>
    )
}

const styles = {
    container: {
        flex: 1
    },
    title: {
        color: '#FFF'
    }
}

export default Header