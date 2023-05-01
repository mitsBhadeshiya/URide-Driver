import React, { useRef, useState } from 'react';
import { Alert, Keyboard, PermissionsAndroid, Text, TextInput, ToastAndroid, View } from 'react-native';
import { EMAIL_IC, FACEBOOK_IC, GOOGLE_IC, LOGO_S_IC, PASSWORD_IC } from '~/common/assets/images';
import { aSty, compSty, gSty, sty } from '~/common/styles';
import { BTN, IcBtn, SfViewBG, TxtInP } from '~/components';
import { _COL } from '~/utils';

const SignInController = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [genrated, setGenrated] = useState(false);
  const passRef = useRef<TextInput>(null);

  const onSubmit = async () => {
    Keyboard.dismiss();
    //ask for location permission
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid?.PERMISSIONS?.ACCESS_FINE_LOCATION)
      const granted2 = await PermissionsAndroid.request(PermissionsAndroid?.PERMISSIONS?.WRITE_EXTERNAL_STORAGE)
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
        /* Alert.alert("You can use the location"); */
        /* ToastAndroid.show("You can use the location", ToastAndroid.SHORT); */
        if (granted2 === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the location")
          /* Alert.alert("You can use the location"); */
          ToastAndroid.show("You can use the location", ToastAndroid.SHORT);
        }
        navigation.navigate('SignUp');
      } else {
        console.log("location permission denied")
        Alert.alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <SfViewBG ctr>
      <View style={sty.ctrRow100}>
        <LOGO_S_IC />
        <Text style={gSty.titleTxt}>U RIDE</Text>
      </View>

      <View style={aSty.lCard}>
        <View style={aSty.lCardV}>
          <Text style={aSty.lCardH}>Login</Text>
          <TxtInP
            val={email}
            onChangeT={setEmail}
            vSty={{ marginTop: 20 }}
            rIc={<EMAIL_IC />}
            pHolder="Email"
            tProps={{
              keyboardType: 'email-address',
              autoCapitalize: 'none',
              autoCorrect: false,
              autoComplete: "email"
            }}
            onSubE={() => passRef?.current?.focus()}
          />
          <TxtInP
            reff={passRef}
            pHolder="Password"
            val={password}
            onChangeT={setPassword}
            rIc={<PASSWORD_IC />}
            vSty={{ marginTop: 15 }}
            tProps={{
              secureTextEntry: true,
              autoCorrect: false,
              autoComplete: "password"
            }}
            rKeyT="go"
            onSubE={onSubmit}
          />
          <Text style={compSty.fPassTxt}>Forgot Password?</Text>
        </View>
        <BTN title='SUBMIT' onP={onSubmit} />
      </View>
      <Text style={compSty.orTxt}>Or Login with</Text>
      <View style={sty.ctrRow100}>
        <IcBtn rounded title='Facebook' rIC={<FACEBOOK_IC style={{ marginRight: 10 }} />} />
        <IcBtn rounded title='Google' rIC={<GOOGLE_IC style={{ marginRight: 10 }} />} />
      </View>
      <Text style={[compSty.orTxt, { color: "#99ffffff" }]}>Don’t have a Account</Text>
      <Text onPress={onSubmit} style={[compSty.orTxt, { textDecorationLine: "underline", paddingVertical: 10 }]}>Sign Up</Text>
    </SfViewBG>
  )
}

export default SignInController;