import React from 'react';
import { View, Text } from 'react-native';
import { LOGO_IC_W } from '~/common/assets/images';
import { gSty } from '~/common/styles';
import { SfView } from '~/components';
import { _COL, _str, _WIDTH } from '~/utils';

const AboutUsController = () => {
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <View style={gSty.logoV} >
        <LOGO_IC_W height={_WIDTH * .1} width={_WIDTH * .1} />
      </View>
      <Text style={gSty.logoTxt}>U-RIDE</Text>
      <Text style={gSty.txt}>{_str.AboutUS}</Text>
    </SfView>
  )
}

export default AboutUsController;