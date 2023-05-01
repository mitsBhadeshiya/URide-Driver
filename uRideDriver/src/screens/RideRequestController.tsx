import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';
import { useDispatch } from 'react-redux';
import { CASH_IC, REG_IC, LOCATION_DISTANCE, CLOCK_ICON, FROM_IC, LOCATION_IC_GREEN, PATH_IC, DESINATION_IC, PIN_IC } from '~/common/assets/images';
import { findRegion } from '~/common/fncs';
import { mSty, sty } from '~/common/styles';
import { BorderBTN, BTN, SfView } from '~/components';
import { set_Ride_Mode } from '~/context/actions';
import { _COL } from '~/utils';
const routeArr = [
    { latitude: 37.801253, longitude: -122.425281 },
    { latitude: 37.798841, longitude: -122.444250 }
]

const RideRequestController = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const onSubmit = () => { dispatch(set_Ride_Mode(true)); navigation?.goBack(); }

    return (
        <SfView ctr bgCol={_COL.WHITE} cSty={{ paddingTop: 20 }}>
            <View style={sty.ctrRow100}>
                <View style={[sty.rowAc, { width: "40%", marginStart: "8%" }]}>
                    <CLOCK_ICON style={{ marginRight: 10 }} />
                    <View>
                        <Text style={mSty.ratingCount}>7 min</Text>
                        <Text style={mSty.titleTxt}>Estimate Time</Text>
                    </View>
                </View>
                <View style={mSty.lineC} />
                <View style={[sty.rowAc, { width: "40%" }]}>
                    <LOCATION_DISTANCE style={{ marginRight: 10 }} />
                    <View>
                        <Text style={mSty.ratingCount}>3 Km</Text>
                        <Text style={mSty.titleTxt}>Distance</Text>
                    </View>
                </View>
            </View>
            <View style={mSty.lineR} />
            <View style={sty.ctrRow100}>
                <View style={[sty.rowAc, { width: "40%", marginStart: "8%" }]}>
                    <REG_IC style={{ marginRight: 10 }} />
                    <View>
                        <Text style={mSty.ratingCount}>Schedule</Text>
                        <Text style={mSty.titleTxt}>Booking Type</Text>
                    </View>
                </View>
                <View style={mSty.lineC} />
                <View style={[sty.rowAc, { width: "40%" }]}>
                    <CASH_IC style={{ marginRight: 10 }} />
                    <View>
                        <Text style={mSty.ratingCount}>Cash</Text>
                        <Text style={mSty.titleTxt}>Payment</Text>
                    </View>
                </View>
            </View>
            <View style={mSty.routeV}>
                <View style={[sty.rowAc, { paddingHorizontal: 15, marginTop: 15 }]}>
                    <FROM_IC />
                    <Text style={mSty.address} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>St. Peter’s Park, downtown, New York</Text>
                </View>
                <PATH_IC style={{ paddingHorizontal: 30, alignSelf: "baseline" }} />
                <View style={[sty.rowAc, { paddingHorizontal: 15 }]}>
                    <LOCATION_IC_GREEN />
                    <Text style={mSty.address} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>Marry Church, New York</Text>
                </View>
            </View>
            <View style={mSty.mapCricle} >
                <MapView
                    initialRegion={findRegion(routeArr)}
                    provider={PROVIDER_GOOGLE}
                    style={mSty.mapCricle}
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
                </MapView>
            </View>
            <View style={sty.Row100Jsa}>
                <BTN title='Accept' rounded vSty={{ width: '43%', marginVertical: "10%" }} onP={onSubmit} />
                <BorderBTN title='Reject' rounded onP={() => navigation?.goBack()}
                    vSty={{ width: '43%', marginVertical: "10%", backgroundColor: "#bcd7dd" }}
                    tSty={{ color: _COL.WHITE, textAlign: "center" }} btnSty={{ paddingVertical: 9 }}
                />
            </View>
        </SfView>
    )
}

export default RideRequestController;