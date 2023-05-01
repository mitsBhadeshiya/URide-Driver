import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { CHECK_IMG } from '~/common/assets/images';
import { compSty } from '~/common/styles';
import { RIPPLE_ICf } from '~/utils';

interface Props {
    checked: boolean;
    onP: null | ((event: GestureResponderEvent) => void) | undefined;
}

const CheckBox = ({ onP, checked }: Props) => {
    const s_V = useSharedValue(1);
    const aSty = useAnimatedStyle(() => { return { transform: [{ scale: s_V.value }] }; });

    return (
        <Animated.View style={[aSty, compSty.cbV]}>
            <Pressable
                style={compSty.cb}
                android_ripple={RIPPLE_ICf}
                onPressIn={() => { s_V.value = withTiming(1.15, { duration: 50, easing: Easing.ease }); }}
                onPressOut={() => { s_V.value = withTiming(1, { duration: 50, easing: Easing.ease }); }}
                onPress={onP}
                hitSlop={30}
                pressRetentionOffset={30}
            >
                <FastImage source={CHECK_IMG} style={{ opacity: checked ? 1 : 0, width: 10, height: 10 }} />
            </Pressable>
        </Animated.View>
    )
}

export default CheckBox;