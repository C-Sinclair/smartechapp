import * as React from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native'
import colours from '../../themes/Colours'
import Slider from './Slider';
import Sound from 'react-native-sound'

type DialProps = {
    temp: number,
    setTemp: Function
}

Sound.setCategory('Playback')

const dialRadius = 180

const Dial = (props: DialProps) => {
    const click = new Sound(require('../../../assets/ios-click.mp3'), error => {
        console.log(`error ${error}`)
        return
    })
    return (
        <View style={styles.container}>
            <Slider
                angle={toRadians(props.temp)}
                setAngle={angle => {
                    if (click) click.play()
                    props.setTemp(toCelcius(angle))
                }}
                radius={dialRadius}
                style={styles.slider}
            >
                <Text style={styles.temp} testID="tempFigure">{props.temp}°</Text>

                <TouchableOpacity testID="plus" onPress={() => {
                    if (props.temp < 36) props.setTemp(props.temp + 1)
                }} style={styles.plusHolder}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity testID="minus" onPress={() => {
                    if (props.temp > 0) props.setTemp(props.temp - 1)
                }} style={styles.minusHolder}>
                    <Text style={styles.minus}>-</Text>
                </TouchableOpacity>
            </Slider>
        </View>
    )
}

export const toRadians = temp => temp * Math.PI / 18
export const toCelcius = radians => Math.floor(18 * radians / Math.PI)

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height / 3,
        position: 'relative',
        top: 70
    },
    plusHolder: {
        position: 'absolute',
        zIndex: 100,
        width: 40,
        height: 40,
        left: Dimensions.get("screen").width / 2 - 60,
        top: 70
    },
    plus: {
        color: colours.hot,
        textAlign: 'center',
        fontSize: 50
    },
    minusHolder: {
        position: 'absolute',
        zIndex: 100,
        width: 40,
        height: 40,
        left: Dimensions.get("screen").width / 2 - 60,
        bottom: 90
    },
    minus: {
        color: colours.cold,
        textAlign: 'center',
        fontSize: 50
    },
    temp: {
        color: '#FFF',
        fontSize: 120,
        textAlign: 'center',
        width: 180,
        zIndex: 1,
        left: 120
    },
    slider: {
        position: 'absolute',
        top: 0,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 2
    }
})

export default Dial