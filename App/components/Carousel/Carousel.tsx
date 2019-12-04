import * as React from 'react'
import Carousel from 'react-native-snap-carousel'
import { Dimensions, Text, View, StyleSheet } from 'react-native'
import colours from '../../themes/Colours'

export const carouselOptions = ["LIVING ROOM", "KITCHEN", "BEDROOM"]

type CarouselProps = {
    selected: number,
    setSelected: Function
}

const CarouselComponent = (props: CarouselProps) => {

    const [selected, setSelected] = React.useState(props.selected)

    React.useEffect(() => {
        props.setSelected(selected)
    }, [selected])

    return (
        <View style={styles.container}>
            <Carousel
                testID="carousel"
                ref={c => c}
                data={carouselOptions}
                renderItem={({ item, index }) => (
                    <Text style={styles.item}>{item}</Text>
                )}
                sliderWidth={Dimensions.get("screen").width - 40}
                itemWidth={2 * Dimensions.get("screen").width / 5}
                firstItem={selected}
                onSnapToItem={index => setSelected(index)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.border,
        width: Dimensions.get("screen").width - 40,
        margin: 20,
        position: 'absolute',
        bottom: 0
    },
    wrapper: {
    },
    item: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FFF',
        paddingTop: 40,
        paddingBottom: 40,
        textAlign: 'center',
        alignSelf: 'center',
        height: 120,
        lineHeight: 50
    }
})

export default CarouselComponent