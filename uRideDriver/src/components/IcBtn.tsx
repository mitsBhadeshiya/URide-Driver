import React, { ReactNode } from 'react';
import { Text, Pressable, GestureResponderEvent, ColorValue, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { compSty } from '~/common/styles';
import { RIPPLE_IcBTN, _COL } from '~/utils';

interface Props {
    title: string;
    onP?: null | ((event: GestureResponderEvent) => void) | undefined;
    rounded?: boolean;
    rIC?: ReactNode | JSX.Element | undefined;
    tCol?: ColorValue | undefined;
    vSty?: StyleProp<ViewStyle>;
    btnSty?: StyleProp<ViewStyle>;
    gradient?: boolean;
}

const IcBtn = ({ title, onP, rounded, rIC, tCol, vSty, btnSty, gradient }: Props) => {
    const s_V = useSharedValue(1);
    const aStyles = useAnimatedStyle(() => { return { transform: [{ scale: s_V.value }] }; });

    return (
        gradient ?
            <Animated.View style={[aStyles, rounded ? compSty.icBtnVr : compSty.icBtnV, vSty]}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[_COL.PRIMARY, _COL.SECONDARY]} style={{ borderRadius: rounded ? 5 : 0 }} >
                    <Pressable
                        style={[compSty.icBtn, btnSty]}
                        android_ripple={RIPPLE_IcBTN}
                        onPressIn={() => { s_V.value = withTiming(.98, { duration: 50, easing: Easing.ease }); }}
                        onPressOut={() => { s_V.value = withTiming(1, { duration: 50, easing: Easing.ease }); }}
                        onPress={onP}
                    >
                        {rIC}
                        <Text style={[compSty.icBtnTxt, { color: tCol || _COL.GOOGLE_BLACK }]}>
                            {title}
                        </Text>
                    </Pressable>
                </LinearGradient >
            </Animated.View>
            :
            <Animated.View style={[aStyles, rounded ? compSty.icBtnVr : compSty.icBtnV, vSty]}>
                <Pressable
                    style={[compSty.icBtn, btnSty]}
                    android_ripple={RIPPLE_IcBTN}
                    onPressIn={() => { s_V.value = withTiming(.98, { duration: 50, easing: Easing.ease }); }}
                    onPressOut={() => { s_V.value = withTiming(1, { duration: 50, easing: Easing.ease }); }}
                    onPress={onP}
                >
                    {rIC}
                    <Text style={[compSty.icBtnTxt, { color: tCol || _COL.GOOGLE_BLACK }]}>
                        {title}
                    </Text>
                </Pressable>
            </Animated.View>
    )
};

export default IcBtn;