import React, { FC, ReactNode } from 'react';
import { View, StatusBar, ViewStyle, StyleProp, ScrollView, KeyboardAvoidingView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sty } from '~/common/styles';
import { kAvoidSty, _COL } from '~/utils';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
  ctr?: boolean;
}

const SfViewBG: FC<Props> = ({ children, style, ctr }: Props) => {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor={_COL.TRANSPARENT} />
      <FastImage source={require("../common/assets/images/bg/bg.png")} style={sty.ctrf1w100}>
        <KeyboardAvoidingView behavior={kAvoidSty} style={sty.f1W100} contentContainerStyle={sty.ctr} keyboardVerticalOffset={5}>
          <ScrollView
            style={[style, sty.f1W100]}
            contentContainerStyle={{
              paddingTop: safeAreaInsets.top + 50,
              paddingBottom: safeAreaInsets.bottom + 50,
              alignItems: ctr ? "center" : "flex-start",
            }}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </FastImage>
    </>
  )
}

export default SfViewBG;