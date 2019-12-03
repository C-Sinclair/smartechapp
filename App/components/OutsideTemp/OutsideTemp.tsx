import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colours from '../../themes/Colours'

type OutsideTempProps = {
    temp: number
}

const OutsideTemp = (props: OutsideTempProps) => (
    <View>
        <Text testID="tempText" style={styles.title}>OUTSIDE</Text>
        <Text testID="tempValue" style={styles.value}>{props.temp}°</Text>
    </View>
)

const styles = StyleSheet.create({
    title: {
        color: colours.grey,
        fontSize: 20
    },
    value: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFF',
        paddingTop: 5
    }
})

export default OutsideTemp