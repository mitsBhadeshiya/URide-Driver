import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import React, { memo } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { BANK_IC, CAR_IC_W, DOC_IC_W, GRAPH_IC, HELP_CIRCLE_IC, LOGOUT_IC, LOGO_M_IC, PAYMENT_IC, REFRESH_IC, USER_IC_W } from '~/common/assets/images';
import { mSty, sty } from '~/common/styles';
import { reset_State } from '~/context/actions';
import { HomeScr } from '~/screens';
import { FONT, _COL } from '~/utils';



const Drawer = createDrawerNavigator();

const DrawerNav = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const closeDrawer = () => navigation.dispatch(DrawerActions.closeDrawer());

    const onLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Yes', onPress: () => dispatch(reset_State()) },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                }
            ],
            { cancelable: false },
        );
    }

    function DrawerContent(props: DrawerContentComponentProps) {
        return (
            <LinearGradient colors={[_COL.LIGHT_BLUISH, _COL.BLUISH]} style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <Pressable style={[sty.rowAc, { padding: 10 }]}>
                        <LOGO_M_IC style={{ marginVertical: 10 }} />
                        <View>
                            <Text style={mSty.dTitle}>U-Ride</Text>
                            <Text style={mSty.dSubTitle}>Customer</Text>
                        </View>
                    </Pressable>
                    {/* <DrawerItemList {...props} /> */}
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"My Profile"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('Profile') }}
                        icon={({ size }) => <USER_IC_W height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Manage Documents"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('ManageDoc') }}
                        icon={({ size }) => <DOC_IC_W height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Manage Vehicle"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('ManageVehicle') }}
                        icon={({ size }) => <CAR_IC_W height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"My Trips"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('MyTrips') }}
                        icon={({ size }) => <REFRESH_IC height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Ride Statistics"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('RideStatistic') }}
                        icon={({ size }) => <GRAPH_IC height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Bank Details"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('BankDetail') }}
                        icon={({ size }) => <BANK_IC height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Payment"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('Payment') }}
                        icon={({ size }) => <PAYMENT_IC height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Support"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('Support') }}
                        icon={({ size }) => <HELP_CIRCLE_IC height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Logout"}
                        labelStyle={mSty.dlable}
                        onPress={() => { closeDrawer(), onLogout() }}
                        icon={({ size }) => <LOGOUT_IC height={size} width={size} />}
                    />
                </DrawerContentScrollView>
                <Text style={mSty.vTxt}>V  1.0</Text>
            </LinearGradient>
        );
    }



    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false, overlayColor: _COL.CLOUDY_BLUE04, drawerStatusBarAnimation: "fade",
                drawerLabelStyle: { color: _COL.DARK_NAVY_BLUE, fontFamily: FONT.SEMI_BOLD },
                drawerActiveTintColor: _COL.PRIMARY01, drawerActiveBackgroundColor: _COL.PRIMARY01, drawerType: "front",
            }} useLegacyImplementation={false}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="MapMenu" options={{ drawerLabel: "Map" }} component={HomeScr} />
        </Drawer.Navigator>
    )
}

export default memo(DrawerNav);