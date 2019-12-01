import Heating from '../Scenes/Heating/Heating'
import Electric from '../Scenes/Electric/Electric'
import Network from '../Scenes/Network/Network'
import Lighting from '../Scenes/Lighting/Lighting'
import Gas from '../Scenes/Gas/Gas'

const icons = [
    {
        id: 1,
        name: "bulb",
        images: {
            default: require("../../../assets/icons/bulb-default.png"),
            selected: require("../../../assets/icons/bulb-selected.png")
        },
        component: Lighting
    },
    {
        id: 2,
        name: "centralheating",
        images: {
            default: require("../../../assets/icons/centralheating-default.png"),
            selected: require("../../../assets/icons/centralheating-selected.png")
        },
        component: Heating
    },
    {
        id: 3,
        name: "connections",
        images: {
            default: require("../../../assets/icons/connections-default.png"),
            selected: require("../../../assets/icons/connections-selected.png")
        },
        component: Electric
    },
    {
        id: 4,
        name: "fire",
        images: {
            default: require("../../../assets/icons/fire-default.png"),
            selected: require("../../../assets/icons/fire-selected.png")
        },
        component: Gas
    },
    {
        id: 5,
        name: "worldgrid",
        images: {
            default: require("../../../assets/icons/worldgrid-default.png"),
            selected: require("../../../assets/icons/worldgrid-selected.png")
        },
        component: Network
    }
]

export default icons