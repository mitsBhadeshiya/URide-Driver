import React, { useRef, useState } from 'react';
import { Keyboard, Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CALL_IC, CAM_IC, EMAIL_IC, PASSWORD_IC, REFERAL_IC, USER_IC } from '~/common/assets/images';
import { compSty } from '~/common/styles';
import { BTN, CheckBox, SelectSwitch, SfView, TxtInP } from '~/components';
import { set_User } from '~/context/actions';
import { App_State } from '~/context/store';
import { RIPPLE_IC, _COL } from '~/utils';

const SignUpController = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { _User } = useSelector((state: App_State) => state.AppReducer);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [refCode, setRefCode] = useState('');
  const [gender, setGender] = useState("male")

  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const passRef = useRef<TextInput>(null);
  const cPassRef = useRef<TextInput>(null);
  const refCodeRef = useRef<TextInput>(null);
  const [aggree, setAggree] = useState(false);

  const onSubmit = () => {
    Keyboard.dismiss(); navigation?.push('CarDetail');
    /* dispatch(set_User({ ..._User, _id: "wd" })) */
  }
  return (
    <SfView ctr bgCol={_COL.WHITE}
      footerComp={<BTN onP={onSubmit} title="SUMBIT" />}
    >
      <Pressable
        onPress={null} android_ripple={RIPPLE_IC} style={compSty.pPicV}>
        <CAM_IC />
      </Pressable>

      <TxtInP
        val={name}
        onChangeT={setName}
        pHolder="Fullname"
        vSty={{ marginTop: 30, width: '85%' }}
        rIc={<USER_IC />}
        tProps={{ autoComplete: "name" }}
        onSubE={() => emailRef?.current?.focus()}
      />
      <TxtInP
        reff={emailRef}
        val={email}
        onChangeT={setEmail}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<EMAIL_IC />}
        pHolder="Email"
        tProps={{ keyboardType: 'email-address', autoCapitalize: 'none', autoCorrect: false, autoComplete: "email" }}
        onSubE={() => phoneRef?.current?.focus()}
      />
      <TxtInP
        reff={phoneRef}
        val={phone}
        onChangeT={setPhone}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<CALL_IC />}
        pHolder="Phone Number"
        onSubE={() => passRef?.current?.focus()}
      />
      <SelectSwitch
        Data={[{ label: "Male", value: "male" }, { label: "Female", value: "female" }]}
        onP={(e: any) => console.log(e)}
      />
      <TxtInP
        reff={passRef}
        pHolder="Password"
        val={password}
        onChangeT={setPassword}
        rIc={<PASSWORD_IC />}
        vSty={{ marginTop: 15, width: "85%" }}
        tProps={{ secureTextEntry: true, autoCorrect: false, autoComplete: "password" }}
        onSubE={() => cPassRef?.current?.focus()}
      />
      <TxtInP
        reff={cPassRef}
        pHolder="Confirm Password"
        val={confirmPassword}
        onChangeT={setConfirmPassword}
        rIc={<PASSWORD_IC />}
        vSty={{ marginTop: 15, width: "85%" }}
        tProps={{ secureTextEntry: true, autoCorrect: false, autoComplete: "password" }}
        onSubE={() => refCodeRef?.current?.focus()}
      />
      <TxtInP
        reff={refCodeRef}
        pHolder="Referral Code"
        val={refCode}
        onChangeT={setRefCode}
        rIc={<REFERAL_IC />}
        vSty={{ marginTop: 15, width: "85%" }}
        tProps={{ autoComplete: "off" }}
        onSubE={onSubmit}
        rKeyT="go"
      />

      <View style={compSty.AggreV}>
        <CheckBox checked={aggree} onP={() => setAggree(!aggree)} />
        <Text
          style={compSty.AggreTxt}
          numberOfLines={1}
          adjustsFontSizeToFit
          allowFontScaling={false}
        >I agree to Terms & Conditions of this App</Text>
      </View>

      <View>

        {/*  <SwitchSelector
          initial={0}
          onPress={(value: any) => this.setState({ gender: value })}
          textColor={colors.purple} //'#7a44cf'
          selectedColor={colors.white}
          buttonColor={colors.purple}
          borderColor={colors.purple}
          hasPadding
          options={[
            { label: "Feminino", value: "f", imageIcon: images.feminino }, //images.feminino = require('./path_to/assets/img/feminino.png')
            { label: "Masculino", value: "m", imageIcon: images.masculino } //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
        /> */}
      </View>

    </SfView>
  )
}

export default SignUpController;