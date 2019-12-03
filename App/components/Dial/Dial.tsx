import * as React from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity, Text, PanResponder, PanResponderInstance, Alert } from 'react-native'
import colours from '../../themes/Colours'
import FastImage from 'react-native-fast-image'


type DialProps = {
    temp: number
}

const Dial = (props: DialProps) => {

    const [temp, setTemp] = React.useState(props.temp)
    const [image, setImage] = React.useState(getImage(temp * 10))
    const [values, setValues] = React.useState<{
        startAngle: number,
        startRadius: number,
        releaseAngle: number,
        releaseRadius: number
    }>()
    const [angle, setAngle] = React.useState(temp * 10)
    const [radius, setRadius] = React.useState(Dimensions.get("screen").width / 2)

    React.useEffect(() => {
        setImage(getImage(temp * 10))
    }, [temp])

    let panResponder: PanResponderInstance = PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => true,
        onStartShouldSetPanResponderCapture: (e, gestureState) => {
            const { deg, radius } = calcAngle(e.nativeEvent)
            setValues({
                ...values,
                startAngle: deg,
                startRadius: radius
            })
            return true
        },
        onMoveShouldSetPanResponder: (e, g) => true,
        onMoveShouldSetPanResponderCapture: (e, gestureState) => true,
        onPanResponderGrant: (e, gestureState) => true,
        onPanResponderMove: (e, gestureState) => requestAnimationFrame(() => {
            updateAngle(gestureState)
        }),
        onPanResponderRelease: (e, gestureState) => {
            setValues({
                ...values,
                releaseAngle: angle,
                releaseRadius: radius,
            })
        },
    })

    function updateAngle(gestureState) {
        let { deg } = calcAngle(gestureState)
        if (Math.abs(angle - deg) > 0) {



            deg = deg + values.releaseAngle - values.startAngle

            Alert.alert(deg.toString())

            setAngle(deg)
            setTemp(deg / 10)
        }
    }

    function calcAngle(gestureState) {
        const { pageX, pageY, moveX, moveY } = gestureState
        const [dx, dy] = [pageX || moveX, pageY || moveY]
        return {
            deg: Math.atan2(dy, dx) * 180 / Math.PI + 120,
            radius: Math.sqrt(dy * dy + dx * dx) / radius
        }
    }


    return (
        <View style={styles.container} {...panResponder.panHandlers}>

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