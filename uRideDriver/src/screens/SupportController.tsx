import React from 'react';
import { View } from 'react-native';
import { mSty } from '~/common/styles';
import { BorderBTN, SfView } from '~/components';
import { _COL } from '~/utils';

const SupportController = ({ navigation }: any) => {
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <BorderBTN title='About US' onP={() => navigation?.navigate("AboutUS")} />
      <View style={mSty.bLine} />
      <BorderBTN title='Privacy Policy' onP={() => navigation?.navigate("PrivacyPolicy")} />
      <View style={mSty.bLine} />
      <BorderBTN title='FAQ' onP={() => navigation?.navigate("FAQ")} />
      <View style={mSty.bLine} />
      <BorderBTN title='Terms & Condition' onP={() => navigation?.navigate("TermsCondition")} />
      <View style={mSty.bLine} />
      <BorderBTN title='Contact US' onP={() => navigation?.navigate("ContactUs")} />
    </SfView>
  )
}

export default SupportController;