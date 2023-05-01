import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StatusBar, Switch, Text, Platform } from 'react-native';
import MapView, { Camera, EventUserLocation, Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';
import { mSty, sty } from '~/common/styles';
import { customMapStyle, _COL, _HEIGHT, _WIDTH } from '~/utils';
import { CALL_IC, CALL_ICON, CAL_IC, CLOCK_ICON, DESINATION_IC, DRAWER_IC, FROM_IC2, LOCATION_DISTANCE, LOCATION_IC, LOCATION_IC_GREEN, MAN_IC, NAVIGATION_ARROW, PHONE_IC, TAXI_IC, USER_IC_W } from '~/common/assets/images';
import { Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { App_State } from '~/context/store';
import { BTN, IcBtn } from '~/components';
import { set_Ride_Mode } from '~/context/actions';


const HomeController = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const safeAreaInsets = useSafeAreaInsets();
  const { rideMode } = useSelector((state: App_State) => state.AppReducer);

  const mapRef = useRef<MapView>(null);
  /* const [geolocation, setGeolocation] = useState({
    latitude: 0,
    longitude: 0,
    altitude: 0,
    heading: 0,
    speed: 0,
  }); */
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [altitude, setAltitude] = useState(0);
  const [heading, setHeading] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [online, setOnline] = useState(true);
  const [btnTxt, setBtnTxt] = useState('Arrived');


  const [cameraHeading, setCameraHeading] = useState(0);
  useEffect(() => {
    /* const watchId = Geolocation.watchPosition((position) => {
      const { latitude: la, longitude: lo, altitude: al, heading: he, speed: sp } = position.coords;
      setLatitude(la); setLongitude(lo); setAltitude(al || 0); setHeading(he || 0); setSpeed(sp || 0);
      console.log("__position", position);
      updateCameraHeading();
    });
    return () => Geolocation.clearWatch(watchId); */
    setLatitude(13.036374); setLongitude(80.212225);
  }, []);

  function updateCameraHeading() {
    const map = mapRef.current;
    map?.getCamera().then((info: Camera) => {
      setCameraHeading(info.heading);
    });
  }

  const updateUserLocation = useCallback((location: EventUserLocation) => {
    const { latitude: la, longitude: lo, altitude: al, heading: he, speed: sp } = location?.nativeEvent?.coordinate;
    setLatitude(la); setLongitude(lo); setAltitude(al || 0); setHeading(he || 0); setSpeed(sp || 0);
  }, [latitude, longitude, altitude, heading, speed]);

  const onMen = () => { !rideMode && setTimeout(() => navigation.navigate('RideRequest'), 900) };

  const onRide = () => {
    if (btnTxt === 'Arrived') {
      setBtnTxt('Start Ride');
    } else if (btnTxt === 'Start Ride') {
      setBtnTxt('Complete Ride');
    } else {
      dispatch(set_Ride_Mode(false));
      navigation.navigate('RideFare');
      setBtnTxt('Arrived');
    }
  }

  return (
    <View style={sty.ctrf1w100}>
      <StatusBar barStyle="dark-content" translucent backgroundColor={_COL.TRANSPARENT} />
      <MapView
        ref={mapRef}
        provider={Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
        initialRegion={{
          latitude: 25.253186756119863,
          longitude: 78.44189615035938,
          latitudeDelta: 50,
          longitudeDelta: 50,
        }}
        /* showsTraffic */
        //customMapStyle={customMapStyle}
        mapPadding={safeAreaInsets}
        onTouchEnd={updateCameraHeading}
        onTouchCancel={updateCameraHeading}
        onTouchStart={updateCameraHeading}
        onTouchMove={updateCameraHeading}
        /* showsUserLocation */
        followsUserLocation
        scrollEnabled
        userLocationCalloutEnabled
        showsBuildings
        showsMyLocationButton={false}
        showsIndoorLevelPicker
        showsIndoors
        showsPointsOfInterest
        loadingIndicatorColor='#666666'
        tintColor='#666666'
        showsScale
        showsCompass
        loadingEnabled
        /* onRegionChangeComplete={updateUserLocation} */
        /* userLocationFastestInterval={1000} */
        /* userLocationUpdateInterval={1000} */
        /* toolbarEnabled */
        userLocationAnnotationTitle='My Location'
        /* onUserLocationChange={updateUserLocation} */
        userLocationPriority="high"
        /* userInterfaceStyle="dark" */
        zoomEnabled
        pitchEnabled
        /* zoomControlEnabled */
        zoomTapEnabled
        scrollDuringRotateOrZoomEnabled
        paddingAdjustmentBehavior='automatic'
        rotateEnabled
        style={[sty.w100CtrBg, { height: "100%" }]}
      >
        <Marker coordinate={{ latitude, longitude }} flat hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }} >
          <View style={[mSty.dCarIc, { transform: [{ rotate: `${heading}deg` }] }]}>
            <TAXI_IC />
          </View>
        </Marker>
        <Marker
          coordinate={{ latitude: 13.0399150, longitude: 80.212220 }}
          title="RIDE REQUEST" description="Hello!, I am here."
          flat onPress={onMen} >
          <MAN_IC />
        </Marker>
      </MapView>

      <View style={[sty.Row100Jsb, { position: "absolute", top: safeAreaInsets.top + 12 }]}>
        <Pressable style={mSty.drawerIc} onPress={() => { navigation?.openDrawer() }}>
          <DRAWER_IC />
        </Pressable>
        <View style={mSty.onV}>
          <Text style={mSty.onTxt}>{online ? "Online" : "Offline"}</Text>
          <Switch value={online} onValueChange={() => setOnline(!online)} trackColor={{ false: _COL.GRAY66, true: _COL.F6 }} thumbColor={online ? _COL.BLUISH : _COL.F6} />
        </View>
      </View>
      <Pressable style={[mSty.ownLoc, { bottom: safeAreaInsets.bottom + 20 }]} onPress={() => {
        mapRef.current?.animateCamera({ center: { "latitude": latitude + 0.0035, longitude }, zoom: 16.7 }, { duration: 700 })
      }}>
        <LOCATION_IC width={_WIDTH * .07} height={_WIDTH * .07} />
      </Pressable>


      {/* Overlays Componts */}
      {rideMode ?
        <>
          <View style={[mSty.ovMain, { paddingTop: safeAreaInsets.top + _WIDTH * .05 }]}>
            <View style={[sty.rowAc, {}]}>
              {btnTxt === "Complete Ride" ? <LOCATION_IC_GREEN /> : <FROM_IC2 style={{ marginEnd: 10 }} />}
              <Text style={mSty.oAddress} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>
                {btnTxt === "Complete Ride" ? "Marry Church, New York" : "St. Peter’s Park, downtown, New York"}
              </Text>
            </View>
            <View style={mSty.ovUserV}>
              <View style={sty.rowAc}>
                <View style={mSty.userImg2}><USER_IC_W width="80%" /></View>
                <Text style={mSty.dateT}>Lisa Smith</Text>
              </View>
              <IcBtn
                tCol={_COL.WHITE}
                rounded title={btnTxt === "Complete Ride" ? "Navigate" : 'Call'}
                gradient={btnTxt === "Complete Ride"}
                rIC={btnTxt === "Complete Ride" ? <NAVIGATION_ARROW height={20} width={20} style={{ marginRight: 12 }} /> : <PHONE_IC height={20} width={20} style={{ marginRight: 12 }} />}
                vSty={[mSty.callBtn, {
                  backgroundColor: btnTxt === "Complete Ride" ? _COL.TRANSPARENT : _COL.GREENISH_TEAL,
                  width: btnTxt === "Complete Ride" ? _WIDTH * .4 : _WIDTH * .3,
                }]} btnSty={{ paddingVertical: 12 }}
              />
            </View>
            <View style={sty.ctrRow100}>
              <View style={[sty.rowAc, { width: "48%", marginStart: "8%" }]}>
                <CLOCK_ICON style={{ marginRight: 10 }} />
                <View>
                  <Text style={mSty.ratingCount}>7 min</Text>
                  <Text style={mSty.titleTxt}>Estimate Time</Text>
                </View>
              </View>
              <View style={mSty.lineC} />
              <View style={[sty.rowAc, { width: "48%", paddingStart: '5%' }]}>
                <LOCATION_DISTANCE style={{ marginRight: 10 }} />
                <View>
                  <Text style={mSty.ratingCount}>3 Km</Text>
                  <Text style={mSty.titleTxt}>Distance</Text>
                </View>
              </View>
            </View>
          </View>

          <BTN title={btnTxt} rounded vSty={{ position: "absolute", bottom: safeAreaInsets.bottom + 50, width: '60%' }} onP={onRide} />
        </>
        : <></>
      }
    </View >
  )
}

export default HomeController;