import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { _COL } from '~/utils';

const SelectSwitch = ({ Data, onP, height = 50, sty = {} }) => {
    return (
        <SwitchSelector
            initial={0}
            options={Data}
            height={height || 50}
            borderRadius={5}
            animationDuration={100}
            fontSize={15}
            onPress={onP}
            style={[{ width: '85%', marginTop: 15 }, sty]}
            imageStyle={{ width: 40, height: 40, resizeMode: 'contain' }}
            selectedColor={_COL.WHITE}
            buttonColor={_COL.BLUISH}
            borderColor={_COL.BORDER}
            textColor={_COL.GRAY66}
            backgroundColor={_COL.F9}
            textContainerStyle={{ justifyContent: "center", flexDirection: "column" }}
            selectedTextContainerStyle={{ justifyContent: "center", flexDirection: "column" }}
        />
    )
}

export default SelectSwitch;