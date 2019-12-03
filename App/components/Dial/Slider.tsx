import * as React from 'react'
import { useState, useEffect } from 'react'
import { PanResponder, View, PanResponderInstance } from 'react-native';
import Svg, { Circle, G, LinearGradient, Path, Defs, Stop } from 'react-native-svg';
import range from 'lodash.range';
import { interpolateHcl as interpolateGradient } from 'd3-interpolate';
import colours from '../../themes/Colours';
import { toCelcius } from './Dial';

function calculateArcColor(index0, segments, gradientColorFrom, gradientColorTo) {
    const interpolate = interpolateGradient(gradientColorFrom, gradientColorTo);

    return {
        fromColor: interpolate(index0 / segments),
        toColor: interpolate((index0 + 1) / segments),
    }
}

const getGradientId = index => `gradient${index}`

type SliderProps = {
    angle: number,
    setAngle: Function,
    radius: number,
    style: object,
    children: Element
}

const Slider = (props: SliderProps) => {

    const [segments, setSegments] = useState(toCelcius(props.angle) * 2)
    const [stopStrokeWidth, setStopStrokeWidth] = useState(1)
    const [circleState, setCircleState] = useState({
        circleCenterX: 0,
        circleCenterY: 0,
    })

    useEffect(() => {
        setSegments(toCelcius(props.angle) * 2)
    }, [props.angle])

    let circle

    const strokeWidth = 40
    const gradientColorFrom = colours.cold
    const gradientColorTo = colours.hot

    const panResponder: PanResponderInstance = PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderMove: (evt, { moveX, moveY }) => {
            const { circleCenterX, circleCenterY } = circleState;
            const { setAngle } = props;

            let newAngle = Math.atan2(moveY - circleCenterY, moveX - circleCenterX) + Math.PI / 2;
            let newAngleLength = newAngle % (2 * Math.PI);

            if (newAngleLength < 0) newAngleLength += 2 * Math.PI;

            setAngle(newAngleLength);
        },
    });

    const setCircleCenter = () => {
        circle.measure((x, y, w, h, px, py) => {
            const halfOfContainer = getContainerWidth() / 2;
            setCircleState({ circleCenterX: px + halfOfContainer, circleCenterY: py + halfOfContainer });
        });
    }

    const getContainerWidth = () => strokeWidth + props.radius * 2 + 2;

    const calculateArcCircle = (index0, radius, angleLength0 = 2 * Math.PI) => {
        // Add 0.0001 to the possible angle so when start = stop angle, whole circle is drawn
        const startAngle = 0 % (2 * Math.PI);
        const angleLength = (angleLength0 - 0.02) % (2 * Math.PI);
        const index = index0 + 1;
        const fromAngle = angleLength / segments * (index - 1) + startAngle;
        const toAngle = angleLength / segments * index + startAngle;
        const fromX = radius * Math.sin(fromAngle);
        const fromY = -radius * Math.cos(fromAngle);
        const realToX = radius * Math.sin(toAngle);
        const realToY = -radius * Math.cos(toAngle);

        // minus 0.05 to stop drawing a little bit earlier so segments stick together
        const toX = radius * Math.sin(toAngle - 0.06);
        const toY = -radius * Math.cos(toAngle - 0.06);

        return {
            fromX,
            fromY,
            toX,
            toY,
            realToX,
            realToY,
        };
    }

    const containerWidth = getContainerWidth();
    const stop = calculateArcCircle(segments - 1, props.radius, props.angle);

    return (
        <View
            style={[props.style, {
                width: containerWidth,
                height: containerWidth
            }]}
            onLayout={() => setCircleCenter()}
        >
            <Svg
                testID="sliderSVG"
                height={containerWidth}
                width={containerWidth}
                ref={c => circle = c}
                style={{
                    position: 'absolute',
                    top: 0
                }}
            >
                <Defs>
                    {
                        range(segments).map(i => {
                            const { fromX, fromY, toX, toY } = calculateArcCircle(i, props.radius, props.angle);
                            const { fromColor, toColor } = calculateArcColor(i, segments, gradientColorFrom, gradientColorTo)
                            return (
                                <LinearGradient key={i} id={getGradientId(i)} x1={fromX.toFixed(2)} y1={fromY.toFixed(2)} x2={toX.toFixed(2)} y2={toY.toFixed(2)}>
                                    <Stop offset="0%" stopColor={fromColor} />
                                    <Stop offset="1" stopColor={toColor} />
                                </LinearGradient>
                            )
                        })
                    }
                </Defs>

                {/* ##### Circle */}

                <G transform={{
                    translate: `${strokeWidth / 2 + props.radius + 1}, ${strokeWidth / 2 + props.radius + 1}`
                }}>

                    {
                        range(segments).map(i => {
                            const { fromX, fromY, toX, toY } = calculateArcCircle(i, props.radius, props.angle);
                            const d = `M ${fromX.toFixed(2)} ${fromY.toFixed(2)} A ${props.radius} ${props.radius} 0 0 1 ${toX.toFixed(2)} ${toY.toFixed(2)}`;
                            return (
                                <Path
                                    d={d}
                                    key={i}
                                    strokeWidth={strokeWidth}
                                    stroke={`url(#${getGradientId(i)})`}
                                    fill="transparent"
                                />
                            )
                        })
                    }

                    {/* ##### Stop Icon */}

                    {props.angle > 0 ? (
                        <G
                            fill={`url(#${getGradientId(segments)})`}
                            transform={{ translate: `${stop.toX}, ${stop.toY}` }}
                            onPressIn={() => setStopStrokeWidth(5)}
                            onPressOut={() => setStopStrokeWidth(1)}
                            {...panResponder.panHandlers}
                        >
                            <Circle
                                r={((strokeWidth - 1) / 2) * stopStrokeWidth}
                                fill={gradientColorTo}
                                stroke={gradientColorTo}
                                strokeWidth={stopStrokeWidth}
                            />
                        </G>
                    ) : <G />}

                </G>
            </Svg>

            {props.children}

            <Svg height="70%" width="70%" viewBox="0 0 100 100"
                style={{
                    position: 'absolute',
                    zIndex: -1,
                    left: 58
                }}>
                <Defs>
                    <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="100">
                        <Stop offset="0" stopColor={colours.lightest} />
                        <Stop offset="1" stopColor={colours.darkest} />
                    </LinearGradient>
                </Defs>
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={colours.border}
                    strokeWidth="2.5"
                    fill="url(#gradient)" />
            </Svg>
        </View>
    );
}

export default Slider