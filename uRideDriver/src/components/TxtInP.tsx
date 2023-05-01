import React, { FC, LegacyRef } from 'react';
import { View, StyleProp, ViewStyle, TextInput, TextInputProps, ReturnKeyTypeOptions, TextInputSubmitEditingEventData, NativeSyntheticEvent, TextStyle } from 'react-native';
import { compSty } from '~/common/styles';
import { _COL } from '~/utils';

interface Props {
  vSty?: StyleProp<ViewStyle> | undefined;
  rIc?: JSX.Element | undefined;
  pHolder?: string | undefined;
  tProps?: TextInputProps | undefined;
  rKeyT?: ReturnKeyTypeOptions | undefined;
  onSubE?: ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void) | undefined;
  reff?: LegacyRef<TextInput> | undefined;
  tSty?: StyleProp<TextStyle> | undefined;
  val?: string | undefined;
  onChangeT?: ((text: string) => void) | undefined;
}

const TxtInP: FC<Props> = ({ vSty, tSty, rIc, pHolder, tProps, rKeyT, onSubE, reff, val, onChangeT }: Props) => {
  return (
    <View style={[compSty.txtIpV, vSty]}>
      {rIc}
      <TextInput
        ref={reff}
        value={val}
        onChangeText={onChangeT}
        placeholder={pHolder}
        style={[compSty.txtIp, tSty]}
        placeholderTextColor={_COL.GRAY}
        returnKeyType={rKeyT || "next"}
        onSubmitEditing={onSubE}
        allowFontScaling={false}
        blurOnSubmit={false}
        {...tProps}
      />
    </View>
  )
}

export default TxtInP;