import * as React from 'react'
import SpriteSheet from 'rn-sprite-sheet'
import { Dimensions } from 'react-native'

type DialProps = {
    temp: number
}

const Dial = (props: DialProps) => {

    React.useEffect(() => {

    }, [])

    return (
        <SpriteSheet
            ref={r => r}
            source={require("../../../assets/sprite.png")}
            columns={18}
            rows={5}
            animations={{
                increase: Array.from({ length: 72 }, (v, k) => k),
                decrease: []
            }}
            width={Dimensions.get("screen").width - 100}
        />
    )
}

export default Dial