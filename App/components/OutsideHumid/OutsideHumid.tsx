import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colours from '../../themes/Colours'

type OutsideHumidProps = {
    humid: number
}

const OutsideHumid = (props: OutsideHumidProps) => (
    <View>
        <Text testID="humidText" style={styles.title}>HUMIDITY</Text>
        <Text testID="humidValue" style={styles.value}>{props.humid}%</Text>
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
        paddingTop: 5,
        textAlign: 'right'
    }
})

export default OutsideHumid