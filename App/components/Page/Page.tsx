import * as React from 'react'
import { View, Dimensions } from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import Header from '../Header/Header'
import Icon from '../Icon/Icon'
import icons from '../Icon/icons'

const Page: React.FunctionComponent<{}> = (props: Object) => {

    const [selected, onSelected] = React.useState(icons[0])

    React.useEffect(() => {
        Actions.popTo(selected.name)
    }, [selected])

    return (
        <View style={styles.page}>
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
            <Router>
                <Stack key="content">
                    {icons.map(icon => (
                        <Scene key={icon.name} component={icon.component} />
                    ))}
                </Stack>
            </Router>
        </View>
    )
}

const styles = {
    page: {
        backgroundColor: '#000',
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    icons: {
        flex: 1,
        flexDirection: "row",
        width: Dimensions.get('screen').width,
        justifyContent: 'space-evenly'
    }
}

export default Page