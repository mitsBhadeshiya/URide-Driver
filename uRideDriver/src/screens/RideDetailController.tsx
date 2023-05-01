import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { findRegion } from '~/common/fncs';
import { mSty, sty } from '~/common/styles';
import { FONT, _COL } from '~/utils';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { CAR_RIDE, DESINATION_IC, PIN_IC, HATCHBACK_IC, USER_IC_W, FROM_IC, LOCATION_IC_GREEN, PATH_IC } from '~/common/assets/images';
import { BTN, Rating, SfView } from '~/components';

const routeArr = [
  { latitude: 37.801253, longitude: -122.425281 },
  { latitude: 37.798841, longitude: -122.444250 }
]

const RideDetailController = () => {
  return (
    <SfView ctr bgCol={_COL.WHITE} cSty={{ paddingTop: 0 }}>
      <MapView
        initialRegion={findRegion(routeArr)}
        provider={PROVIDER_GOOGLE}
        style={mSty.previewMap}
        loadingEnabled
        loadingIndicatorColor={_COL.BLUISH}
        loadingBackgroundColor={_COL.TRANSPARENT}
      >
        <Polyline coordinates={routeArr} strokeWidth={3} strokeColor={_COL.PRIMARY_BLACK} />
        <Marker coordinate={routeArr[0]} title={'Start'} description={'Start point of your trip'}>
          <PIN_IC />
        </Marker>
        <Marker coordinate={routeArr[1]} title={'End'} description={'End point of your trip'}>
          <DESINATION_IC />
        </Marker>
        {/*  <MapViewDirections
          origin={origin}
          destination={destination}
          lineDashPattern={[0]}
          apikey={GOOGLE_MAPS_APIKEY}
          language='en'
          strokeWidth={4}
          strokeColor="black"
          onError={(errorMessage) => {
            console.log("MapViewDirections_ERROR",errorMessage);
          }}
        /> */}
      </MapView>
      <View style={mSty.detailHeader}>
        <View style={sty.rowAc}>
          <View style={mSty.userImg}><USER_IC_W /></View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={mSty.onTxt}>Lisa Smith</Text>
            <View style={sty.rowAc}>
              <Rating star={4} height={20} starSize={17} />
              <Text style={mSty.ratingCount}>(20)</Text>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
          <HATCHBACK_IC height={22} width={45} />
          <Text style={[mSty.ratingCount, { fontFamily: FONT.SEMI_BOLD }]}>Mon, 19 sept</Text>
        </View>
      </View>
      <View style={mSty.detailRow} />
      <View style={mSty.detailRow}>
        <Text style={mSty.ratingCount}>Booking ID</Text>
        <Text style={mSty.onTxt}>#tx4d5656d1</Text>
      </View>
      <View style={mSty.bLine} />
      <View style={mSty.detailRow}>
        <Text style={mSty.ratingCount}>Distance Travelled</Text>
        <Text style={mSty.onTxt}>1.44 kms</Text>
      </View>
      <View style={mSty.bLine} />
      <View style={mSty.detailRow}>
        <Text style={mSty.ratingCount}>Time Taken</Text>
        <Text style={mSty.onTxt}>5 mins</Text>
      </View>
      <View style={mSty.bLine} />
      <View style={mSty.detailRow}>
        <Text style={mSty.ratingCount}>Base Fare</Text>
        <Text style={mSty.onTxt}>$25</Text>
      </View>
      <View style={mSty.bLine} />
      <View style={mSty.detailRow}>
        <Text style={mSty.ratingCount}>Discount</Text>
        <Text style={mSty.onTxt}>$5</Text>
      </View>
      <View style={mSty.bLine} />
      <View>
        <View style={[sty.rowAc, { paddingHorizontal: 15, marginTop: 15 }]}>
          <FROM_IC />
          <Text style={mSty.address} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>St. Peter’s Park, downtown, New York</Text>
        </View>
        <PATH_IC style={{ paddingHorizontal: 30 }} />
        <View style={[sty.rowAc, { paddingHorizontal: 15 }]}>
          <LOCATION_IC_GREEN />
          <Text style={mSty.address} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>Marry Church, New York</Text>
        </View>
      </View>
      <View style={mSty.detailRow}>
        <Text style={mSty.ratingCount}>Payment</Text>
        <Text style={[mSty.onTxt, { color: _COL.DARK_SEAFOAM_GREEN }]}>$20 (Cash)</Text>
      </View>
      <View style={mSty.bLine} />
      <BTN title='RATE RIDER' rounded vSty={{ width: "90%", marginVertical: 20 }} />
    </SfView>
  )
}

export default RideDetailController;