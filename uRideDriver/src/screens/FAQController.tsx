import React from 'react';
import { View } from 'react-native';
import { mSty } from '~/common/styles';
import { SfView, BorderBTN } from '~/components';
import { _COL } from '~/utils';

const FAQController = () => {
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <BorderBTN title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
      <View style={mSty.bLine} />
      <BorderBTN tSty={{ color: _COL.BLACK }} title='At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.' />
      <View style={mSty.bLine} />
      <BorderBTN title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
      <View style={mSty.bLine} />
      <BorderBTN title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
    </SfView>
  )
}

export default FAQController;