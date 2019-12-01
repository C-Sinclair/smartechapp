import * as React from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../Header/Header'
import Icon from '../Icon/Icon'
import icons from '../Icon/icons'
import { IconType } from '../Icon/IconTypes'
import colours from '../../themes/Colours'
import OutsideTemp from '../OutsideTemp/OutsideTemp'
import OutsideHumid from '../OutsideHumid/OutsideHumid'

type PageProps = {
    selectedIcon: number
}

const Page: React.FunctionComponent<PageProps> = (props: PageProps) => {

    const index = props.selectedIcon || 0
    const [selected, onSelected] = React.useState<IconType>(icons[index] as IconType)

    return (
        <LinearGradient colors={[colours.darkest, colours.lightest]} style={styles.page}>
            <Header />
            <View style={styles.icons}>
                {icons.map(icon => (
                    <Icon
                        key={icon.id}
                        icon={icon}
                        selected={selected.id == icon.id}
                        onSelected={onSelected} />
                ))}
            </View>
            <View testID="content" style={styles.content}>
                {selected.name == "centralheating"
                    ? (
                        <View testID="heating">
                            <View style={styles.readings}>
                                <OutsideTemp />
                                <OutsideHumid />
                            </View>
                        </View>
                    )
                    : <View />
                }
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#000',
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    icons: {
        flex: 1,
        width: Dimensions.get('screen').width,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    content: {
        position: 'relative',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height - 350,
        marginTop: 25
    },
    readings: {
        position: 'absolute',
        top: 0,
        width: Dimensions.get('screen').width,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    readingTitle: {
        color: colours.grey,
        fontSize: 20
    },
    value: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFF',
        paddingTop: 5
    },
    rightValue: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFF',
        paddingTop: 5,
        textAlign: 'right'
    }
})

export default Page