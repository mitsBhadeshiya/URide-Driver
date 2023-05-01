import React from 'react';
import { View, Text } from 'react-native';
import { CALL_ICON, LOGO_IC_W, MAIL_ICON } from '~/common/assets/images';
import { gSty } from '~/common/styles';
import { BorderBTN, SfView } from '~/components';
import { _COL, _HEIGHT, _WIDTH } from '~/utils';

const ContactUsController = () => {
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <View style={gSty.logoV}>
        <LOGO_IC_W height={_WIDTH * .1} width={_WIDTH * .1} />
      </View>
      <Text style={gSty.logoTxt}>U-RIDE</Text>
      <BorderBTN
        title='foxtaxi@xvz.com'
        vSty={{ paddingHorizontal: _WIDTH * .05, marginTop: _HEIGHT * .1 }}
        lIc={<MAIL_ICON style={{ marginRight: "3%" }} />}
        tSty={{ color: _COL.BLACK }}
      />
      <BorderBTN
        title='000 000 0000'
        vSty={{ paddingHorizontal: _WIDTH * .05, marginTop: _HEIGHT * .01 }}
        lIc={<CALL_ICON style={{ marginRight: "3%" }} />}
        tSty={{ color: _COL.BLACK }}
      />
    </SfView>
  )
}

export default ContactUsController;