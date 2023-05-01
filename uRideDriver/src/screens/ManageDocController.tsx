import React from 'react';
import { View, Text } from 'react-native';
import { DOC_IC } from '~/common/assets/images';
import { mSty } from '~/common/styles';
import { BTN, SfView } from '~/components';
import { _COL } from '~/utils';

const ManageDocController = () => {
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <View style={mSty.docCard}>
        <DOC_IC style={{ marginTop: "10%", marginBottom: "3%" }} />
        <Text style={mSty.docCardTxt}>Driving Licence</Text>
        <BTN title='Update' rounded vSty={{ width: "45%", marginTop: "10%", marginBottom: "3%" }} btnSty={{ paddingVertical: 7 }} />
      </View>
      <View style={mSty.docCard}>
        <DOC_IC style={{ marginTop: "10%", marginBottom: "3%" }} />
        <Text style={mSty.docCardTxt}>Car Insurance</Text>
        <BTN title='Update' rounded vSty={{ width: "45%", marginTop: "10%", marginBottom: "3%" }} btnSty={{ paddingVertical: 7 }} />
      </View>
    </SfView>
  )
}

export default ManageDocController;