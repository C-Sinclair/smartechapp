import * as React from 'react'
import { View } from 'react-native'
import Header from '../Header/Header'

const Page: React.FunctionComponent<{}> = (props: Object) => {

    return (
        <View style={styles.page}>
            <Header />
        </View>
    )
}

const styles = {
    page: {
        backgroundColor: '#000'
    }
}

export default Page