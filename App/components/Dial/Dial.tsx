import * as React from 'react'
import { View, Image, Dimensions, StyleSheet, Button } from 'react-native'

type DialProps = {
    temp: number
}

const Dial = (props: DialProps) => {

    const [temp, setTemp] = React.useState(props.temp)
    const [image, setImage] = React.useState(getImage(getAngleFrom(temp)))

    React.useEffect(() => {
        setImage(getImage(getAngleFrom(temp)))
    }, [temp])

    return (
        <View style={styles.container}>
            <Button title="Temp" onPress={() => setTemp(temp + 1)} />
            <Image
                fadeDuration={0}
                style={styles.image}
                source={image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("screen").width,
        padding: 25,
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        top: 75
    },
    image: {
        height: 4 * Dimensions.get("screen").width / 5,
        width: 4 * Dimensions.get("screen").width / 5,
        alignSelf: 'center'
    }
})

const getAngleFrom = temp => temp * 10

const getImage = angle => {
    switch (angle) {
        case 0: return require('../../../assets/png/0.png')
        case 5: return require('../../../assets/png/5.png')
        case 10: return require('../../../assets/png/10.png')
        case 15: return require('../../../assets/png/15.png')
        case 20: return require('../../../assets/png/20.png')
        case 25: return require('../../../assets/png/25.png')
        case 30: return require('../../../assets/png/30.png')
        case 35: return require('../../../assets/png/35.png')
        case 40: return require('../../../assets/png/40.png')
        case 45: return require('../../../assets/png/45.png')
        case 50: return require('../../../assets/png/50.png')
        case 55: return require('../../../assets/png/55.png')
        case 60: return require('../../../assets/png/60.png')
        case 65: return require('../../../assets/png/65.png')
        case 70: return require('../../../assets/png/70.png')
        case 75: return require('../../../assets/png/75.png')
        case 80: return require('../../../assets/png/80.png')
        case 85: return require('../../../assets/png/85.png')
        case 90: return require('../../../assets/png/90.png')
        case 95: return require('../../../assets/png/95.png')
        case 100: return require('../../../assets/png/100.png')
        case 105: return require('../../../assets/png/105.png')
        case 110: return require('../../../assets/png/110.png')
        case 115: return require('../../../assets/png/115.png')
        case 120: return require('../../../assets/png/120.png')
        case 125: return require('../../../assets/png/125.png')
        case 130: return require('../../../assets/png/130.png')
        case 135: return require('../../../assets/png/135.png')
        case 140: return require('../../../assets/png/140.png')
        case 145: return require('../../../assets/png/145.png')
        case 150: return require('../../../assets/png/150.png')
        case 155: return require('../../../assets/png/155.png')
        case 160: return require('../../../assets/png/160.png')
        case 165: return require('../../../assets/png/165.png')
        case 170: return require('../../../assets/png/170.png')
        case 175: return require('../../../assets/png/175.png')
        case 180: return require('../../../assets/png/180.png')
        case 185: return require('../../../assets/png/185.png')
        case 190: return require('../../../assets/png/190.png')
        case 195: return require('../../../assets/png/195.png')
        case 200: return require('../../../assets/png/200.png')
        case 205: return require('../../../assets/png/205.png')
        case 210: return require('../../../assets/png/210.png')
        case 215: return require('../../../assets/png/215.png')
        case 220: return require('../../../assets/png/220.png')
        case 225: return require('../../../assets/png/225.png')
        case 230: return require('../../../assets/png/230.png')
        case 235: return require('../../../assets/png/235.png')
        case 240: return require('../../../assets/png/240.png')
        case 245: return require('../../../assets/png/245.png')
        case 250: return require('../../../assets/png/250.png')
        case 255: return require('../../../assets/png/255.png')
        case 260: return require('../../../assets/png/260.png')
        case 265: return require('../../../assets/png/265.png')
        case 270: return require('../../../assets/png/270.png')
        case 275: return require('../../../assets/png/275.png')
        case 280: return require('../../../assets/png/280.png')
        case 285: return require('../../../assets/png/285.png')
        case 290: return require('../../../assets/png/290.png')
        case 295: return require('../../../assets/png/295.png')
        case 300: return require('../../../assets/png/300.png')
        case 305: return require('../../../assets/png/305.png')
        case 310: return require('../../../assets/png/310.png')
        case 315: return require('../../../assets/png/315.png')
        case 320: return require('../../../assets/png/320.png')
        case 325: return require('../../../assets/png/325.png')
        case 330: return require('../../../assets/png/330.png')
        case 335: return require('../../../assets/png/335.png')
        case 340: return require('../../../assets/png/340.png')
        case 345: return require('../../../assets/png/345.png')
        case 350: return require('../../../assets/png/350.png')
        case 355: return require('../../../assets/png/355.png')
        case 360: return require('../../../assets/png/360.png')
    }
}


export default Dial