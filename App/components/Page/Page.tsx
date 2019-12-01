import * as React from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../Header/Header'
import Icon from '../Icon/Icon'
import icons from '../Icon/icons'
import { IconType } from '../Icon/IconTypes'
import colours from '../../themes/Colours'

const Page: React.FunctionComponent<{}> = (props: Object) => {

    const [selected, onSelected] = React.useState<IconType>(icons[0] as IconType)

    React.useEffect(() => {

    }, [selected])

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
            <View testID="content">
                {selected.name == "centralheating"
                    ? (
                        <View testID="heating">
                            <Text>Heating</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default Page