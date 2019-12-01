import * as React from 'react'
import { View, Dimensions } from 'react-native'
import Header from '../Header/Header'

const Page: React.FunctionComponent<{}> = (props: Object) => {

    return (
        <View style={styles.page}>
            <Header />
            <View style={{
                height: 500
            }} />
        </View>
    )
}

const styles = {
    page: {
        backgroundColor: '#000',
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    }
}

export default Page