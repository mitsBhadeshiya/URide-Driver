import React from 'react';
import { View, Text, StatusBar, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BACK_IC, FROM_IC, HATCHBACK_IC, LOCATION_IC_GREEN, PATH_IC, USER_IC_W } from '~/common/assets/images';
import { gSty, mSty, sty } from '~/common/styles';
import { BTN, Rating } from '~/components';
import { FONT, RIPPLE_IcBTN, _COL, _WIDTH } from '~/utils';

const RideFareController = ({ navigation }: any) => {
    const safeAreaInsets = useSafeAreaInsets();
    return (
        <View style={sty.f1CtrW100}>
            <StatusBar barStyle="dark-content" translucent backgroundColor={_COL.TRANSPARENT} />
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={[_COL.PRIMARY, _COL.SECONDARY]}
                style={[gSty.gradientHeader, { paddingTop: safeAreaInsets.top + _WIDTH * .05 }]}>
                <Pressable android_ripple={RIPPLE_IcBTN} style={[sty.ctr, { padding: 10, margin: -13 }]}
                    onPress={() => navigation?.goBack()}>
                    <BACK_IC />
                </Pressable>
                <Text style={gSty.totalTxt}>$155</Text>
                <Text style={gSty.totalTxt2}>Ride Fare</Text>
            </LinearGradient>

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
            <ScrollView
                style={sty.f1W100}
                contentContainerStyle={{ paddingBottom: safeAreaInsets.bottom + 50, alignItems: "center" }}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews
                keyboardShouldPersistTaps="handled"
            >
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
            </ScrollView>
            <BTN
                title='Collect Payment'
                vSty={{ marginVertical: safeAreaInsets.bottom }}
                onP={() => navigation.goBack()}
            />
        </View >
    )
}

export default RideFareController;