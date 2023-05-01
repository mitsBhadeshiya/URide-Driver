import React, { FC, ReactNode } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, ViewStyle, StyleProp, ColorValue, KeyboardAvoidingView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sty } from '~/common/styles';
import { kAvoidSty, _COL } from '~/utils';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
  ctr?: boolean;
  bgCol?: ColorValue | undefined;
  footerComp?: ReactNode;
  cSty?: StyleProp<ViewStyle> | undefined;
}

const SfView: FC<Props> = ({ children, style, ctr, bgCol, footerComp, cSty }: Props) => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <SafeAreaView style={sty.f1W100}>
      <StatusBar barStyle="dark-content" translucent backgroundColor={_COL.TRANSPARENT} />
      {/* <View style={sty.ctrf1w100}> */}
      <KeyboardAvoidingView behavior={kAvoidSty} style={sty.f1W100} contentContainerStyle={sty.ctr} >
        <ScrollView
          style={[style, sty.f1W100, { backgroundColor: bgCol || _COL.TRANSPARENT }]}
          contentContainerStyle={[{
            paddingTop: safeAreaInsets.top + 10,
            paddingBottom: safeAreaInsets.bottom + 10,
            alignItems: ctr ? "center" : "flex-start",
          }, cSty]}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
        {/* </View> */}
        {footerComp}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SfView;