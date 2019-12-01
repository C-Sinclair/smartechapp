import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colours from '../../themes/Colours'

const OutsideHumid = () => (
    <View>
        <Text testID="humidText" style={styles.title}>HUMIDITY</Text>
        <Text testID="humidValue" style={styles.value}>44%</Text>
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