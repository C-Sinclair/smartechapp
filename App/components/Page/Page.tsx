import * as React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../Header/Header'
import Icon from '../Icon/Icon'
import icons from '../Icon/icons'
import { IconType } from '../Icon/IconTypes'
import colours from '../../themes/Colours'
import OutsideTemp from '../OutsideTemp/OutsideTemp'
import OutsideHumid from '../OutsideHumid/OutsideHumid'
import CarouselComponent from '../Carousel/Carousel'
import Dial from '../Dial/Dial'

type PageProps = {
    selectedIcon: number
}

const Page: React.FunctionComponent<PageProps> = (props: PageProps) => {

    const index = props.selectedIcon || 0
    const [selected, onSelected] = React.useState<IconType>(icons[index] as IconType)
    const [room, setRoom] = React.useState(1)
    const [roomTemps, setRoomTemps] = React.useState([22, 24, 18])

    let humid = calculateHumidity(room)
    let outsideTemp = calculateOutsideTemp()

    React.useEffect(() => {
        humid = calculateHumidity(room)
        outsideTemp = calculateOutsideTemp()
    }, [room])

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
                        <React.Fragment>
                            <View testID="heating" style={styles.readings}>
                                <OutsideTemp temp={outsideTemp} />
                                <OutsideHumid humid={humid} />
                            </View>
                            <CarouselComponent
                                selected={room} setSelected={setRoom} />
                            <Dial
                                temp={roomTemps[room]}
                                setTemp={temp => {
                                    let temps = roomTemps.map((t, index) => {
                                        if (index == room) return temp
                                        return t
                                    })
                                    setRoomTemps(temps)
                                }} />
                        </React.Fragment>
                    )
                    : <View />
                }
            </View>
        </LinearGradient>
    )
}

const calculateHumidity = (room: number) => [32, 44, 11][room]
const calculateOutsideTemp = () => 14

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