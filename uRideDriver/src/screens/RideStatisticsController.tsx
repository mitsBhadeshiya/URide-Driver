import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { CAR_RIDE, CROSS_RIDE, REVENUE_RIDE, TICK_RIDE } from '~/common/assets/images';
import { aSty, gSty, sty } from '~/common/styles';
import { SfView } from '~/components';
import { _COL } from '~/utils';

const RideStatisticsController = () => {
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <View style={sty.Row100Jsb}>
        <Pressable style={aSty.sCard}>
          <CAR_RIDE />
          <Text style={[gSty.txtSb, { color: _COL.BLUISH }]}>Total Rides</Text>
          <Text style={gSty.numT}>10</Text>
        </Pressable>
        <Pressable style={aSty.sCard2}>
          <TICK_RIDE />
          <Text style={[gSty.txtSb, { color: _COL.DARK_SEAFOAM_GREEN }]}>Completed Rides</Text>
          <Text style={gSty.numT}>8</Text>
        </Pressable>
      </View>
      <View style={sty.Row100Jsb}>
        <Pressable style={aSty.sCard}>
          <CROSS_RIDE />
          <Text style={[gSty.txtSb, { color: _COL.BROWNISH_PINK }]}>Cancelled Rides</Text>
          <Text style={gSty.numT}>2</Text>
        </Pressable>
        <Pressable style={aSty.sCard2}>
          <REVENUE_RIDE />
          <Text style={[gSty.txtSb, { color: _COL.BLUISH }]}>Total Revenues</Text>
          <Text style={gSty.numT}>$200</Text>
        </Pressable>
      </View>
    </SfView>
  )
}

export default RideStatisticsController;