import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import FastImage from 'react-native-fast-image';
import { BG_PATTERN, LOGO_IC } from '~/common/assets/images';
import { gSty, sty } from '~/common/styles';
import { _COL, _HEIGHT, _WIDTH } from '~/utils';

const SplashController = () => {
    return (
        </* SafeAreaView style={sty.f1JeBG} */>
            <StatusBar barStyle="dark-content" translucent backgroundColor={_COL.TRANSPARENT} />
            <FastImage source={require("../common/assets/images/bg/bg.png")} style={sty.ctrf1w100}>
                <View style={sty.ctrf1w100}>
                    <LOGO_IC />
                    <Text style={gSty.splashTxt}>U RIDE</Text>
                    <Text style={gSty.splashTxt2}>Driver</Text>
                </View>
            </FastImage>
        </>
    )
}

export default SplashController;