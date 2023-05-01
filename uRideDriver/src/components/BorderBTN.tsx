import React, { ReactNode } from 'react';
import { Text, Pressable, GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { compSty } from '~/common/styles';
import { RIPPLE_ICf, _COL } from '~/utils';

interface Props {
    title: string;
    onP?: null | ((event: GestureResponderEvent) => void) | undefined;
    rounded?: boolean;
    vSty?: StyleProp<ViewStyle>;
    tSty?: StyleProp<TextStyle>;
    lIc?: ReactNode | JSX.Element;
    btnSty?: StyleProp<ViewStyle> | undefined;
}

const BorderBTN = ({ title, onP, rounded, vSty, tSty, lIc, btnSty }: Props) => {
    const s_V = useSharedValue(1);
    const aStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: s_V.value }],
            width: "100%", overflow: "hidden",
            borderRadius: rounded ? 5 : 0
        };
    });

    return (
        <Animated.View style={[aStyles, vSty]}>
            <Pressable
                style={[compSty.pBtn, btnSty]}
                android_ripple={RIPPLE_ICf}
                onPressIn={() => { s_V.value = withTiming(.98, { duration: 50, easing: Easing.ease }); }}
                onPressOut={() => { s_V.value = withTiming(1, { duration: 50, easing: Easing.ease }); }}
                onPress={onP}
            >
                {lIc}
                <Text style={[compSty.pBtnTxt, tSty]}>
                    {title}
                </Text>
            </Pressable>
        </Animated.View>
    )
}

export default BorderBTN;