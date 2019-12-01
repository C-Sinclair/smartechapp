import * as React from "react"
import { View, Image, Text, Dimensions } from 'react-native'

const menuWhite = require('../../../assets/icons/menu-white.png')
const cogWheel = require('../../../assets/icons/cogwheel-white.png')

const screenWidth = Dimensions.get('screen').width

const Header: React.FunctionComponent<{}> = () => {

    return (
        <View testID="header" style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: screenWidth,
            paddingTop: 50,
            paddingLeft: 25,
            paddingRight: 25
        }}>
            <Image testID="menu"
                source={menuWhite}
                style={styles.icon} />
            <Text testID="title"
                style={styles.title}>UTILITIES</Text>
            <Image testID="settings"
                source={cogWheel}
                style={styles.icon} />
        </View>
    )
}

const styles = {
    title: {
        color: '#FFF',
        fontSize: 25
    },
    icon: {
        width: 25,
        height: 25
    }
}

export default Header