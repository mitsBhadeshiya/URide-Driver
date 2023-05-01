import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Switch, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CAR_IC, COLOR_IC, COMPANY_IC, DATE_IC, DOC_IC } from '~/common/assets/images';
import { compSty } from '~/common/styles';
import { BTN, SelectSwitch, SfView, TxtInP } from '~/components';
import { set_User } from '~/context/actions';
import { App_State } from '~/context/store';
import { _COL } from '~/utils';
import { CarSelArr, _HEIGHT } from '~/utils/Constants';

const CarDetailsController = () => {
    const dispatch = useDispatch();
    const { _User } = useSelector((state: App_State) => state.AppReducer);
    const [hAccess, setHAccess] = useState(true);
    const [carCompany, setCarCompany] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carYear, setCarYear] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [carColor, setCarColor] = useState('');

    const cModelRef = useRef<TextInput>(null);
    const cYearRef = useRef<TextInput>(null);
    const cNumberRef = useRef<TextInput>(null);
    const cColorRef = useRef<TextInput>(null);

    const onSubmit = () => {
        Keyboard.dismiss();
        setTimeout(() => { dispatch(set_User({ ..._User, _id: "wd" })) }, 150);
    }

    return (
        <SfView ctr bgCol={_COL.WHITE} footerComp={<BTN onP={onSubmit} title="SUMBIT" />}>

            <Text style={compSty.TitleTxt}>Select your Car Type</Text>
            <SelectSwitch
                Data={CarSelArr}
                onP={undefined}
                height={90}
            />

            <TxtInP
                pHolder="Car Company"
                val={carCompany}
                onChangeT={setCarCompany}
                rIc={<COMPANY_IC />}
                vSty={{ marginTop: _HEIGHT * .07, width: "85%" }}
                tProps={{ autoComplete: "off" }}
                onSubE={() => cModelRef.current?.focus()}
            />
            <TxtInP
                reff={cModelRef}
                pHolder="Car Model"
                val={carModel}
                onChangeT={setCarModel}
                rIc={<CAR_IC />}
                vSty={{ marginTop: 15, width: "85%" }}
                tProps={{ autoComplete: "off" }}
                onSubE={() => cYearRef.current?.focus()}
            />
            <TxtInP
                reff={cYearRef}
                pHolder="Car Model Year"
                val={carYear}
                onChangeT={setCarYear}
                rIc={<DATE_IC />}
                vSty={{ marginTop: 15, width: "85%" }}
                tProps={{ autoComplete: "off" }}
                onSubE={() => cNumberRef.current?.focus()}
            />
            <TxtInP
                reff={cNumberRef}
                pHolder="Registered Vehicle Number"
                val={carNumber}
                onChangeT={setCarNumber}
                rIc={<DOC_IC />}
                vSty={{ marginTop: 15, width: "85%" }}
                tProps={{ autoComplete: "off" }}
                onSubE={() => cColorRef.current?.focus()}
            />
            <TxtInP
                reff={cColorRef}
                pHolder="Car Color"
                val={carColor}
                onChangeT={setCarColor}
                rIc={<COLOR_IC />}
                vSty={{ marginTop: 15, width: "85%" }}
                tProps={{ autoComplete: "off" }}
                onSubE={onSubmit}
                rKeyT="go"
            />

            <View style={compSty.HandicapV}>
                <Text style={compSty.HandicapTxt}>Handicap Access</Text>
                <Switch
                    value={hAccess} onValueChange={() => setHAccess(!hAccess)}
                    trackColor={{ false: "#767577", true: "#f6f6f6" }}
                />
            </View>
        </SfView>
    )
}

export default CarDetailsController;