import * as React from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native'
import colours from '../../themes/Colours'
import FastImage from 'react-native-fast-image'

type DialProps = {
    temp: number,
    setTemp: Function
}

const Dial = (props: DialProps) => {

    const [temp, setTemp] = React.useState(props.temp)
    const [image, setImage] = React.useState(getImage(temp * 10))

    React.useEffect(() => {
        setImage(getImage(temp * 10))
        props.setTemp(temp)
    }, [temp])

    return (
        <View style={styles.container}>

            <FastImage
                style={styles.image}
                source={image}
            />

            <View style={styles.inner}>
                <TouchableOpacity testID="plus" onPress={() => {
                    if (temp < 36) setTemp(temp + 1)
                }}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
                <Text style={styles.temp} testID="tempFigure">{temp}°</Text>
                <TouchableOpacity testID="minus" onPress={() => {
                    if (temp > 0) setTemp(temp - 1)
                }}>
                    <Text style={styles.minus}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height / 3,
        padding: 30,
        position: 'relative',
        top: 75
    },
    inner: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 40
    },
    image: {
        height: 4 * Dimensions.get("screen").width / 5,
        width: 4 * Dimensions.get("screen").width / 5,
        alignSelf: 'center',
        position: 'absolute',
        top: 0
    },
    plus: {
        color: colours.hot,
        textAlign: 'center',
        fontSize: 50,
        top: 0
    },
    minus: {
        color: colours.cold,
        textAlign: 'center',
        fontSize: 50,
        bottom: 0
    },
    temp: {
        color: '#FFF',
        fontSize: 120,
        textAlign: 'center'
    }
})

const getImage = angle => {
    switch (angle) {
        case 0: return require('../../../assets/png/0.png')
        case 10: return require('../../../assets/png/10.png')
        case 20: return require('../../../assets/png/20.png')
        case 30: return require('../../../assets/png/30.png')
        case 40: return require('../../../assets/png/40.png')
        case 50: return require('../../../assets/png/50.png')
        case 60: return require('../../../assets/png/60.png')
        case 70: return require('../../../assets/png/70.png')
        case 80: return require('../../../assets/png/80.png')
        case 90: return require('../../../assets/png/90.png')
        case 100: return require('../../../assets/png/100.png')
        case 110: return require('../../../assets/png/110.png')
        case 120: return require('../../../assets/png/120.png')
        case 130: return require('../../../assets/png/130.png')
        case 140: return require('../../../assets/png/140.png')
        case 150: return require('../../../assets/png/150.png')
        case 160: return require('../../../assets/png/160.png')
        case 170: return require('../../../assets/png/170.png')
        case 180: return require('../../../assets/png/180.png')
        case 190: return require('../../../assets/png/190.png')
        case 200: return require('../../../assets/png/200.png')
        case 210: return require('../../../assets/png/210.png')
        case 220: return require('../../../assets/png/220.png')
        case 230: return require('../../../assets/png/230.png')
        case 240: return require('../../../assets/png/240.png')
        case 250: return require('../../../assets/png/250.png')
        case 260: return require('../../../assets/png/260.png')
        case 270: return require('../../../assets/png/270.png')
        case 280: return require('../../../assets/png/280.png')
        case 290: return require('../../../assets/png/290.png')
        case 300: return require('../../../assets/png/300.png')
        case 310: return require('../../../assets/png/310.png')
        case 320: return require('../../../assets/png/320.png')
        case 330: return require('../../../assets/png/330.png')
        case 340: return require('../../../assets/png/340.png')
        case 350: return require('../../../assets/png/350.png')
        case 360: return require('../../../assets/png/360.png')
    }
}


export default Dial