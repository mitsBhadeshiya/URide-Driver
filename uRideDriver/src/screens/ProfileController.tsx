import React, { useRef, useState } from 'react';
import { View, Text, Pressable, TextInput, Keyboard } from 'react-native';
import { CALL_IC, CAM_IC, EMAIL_IC, USER_IC } from '~/common/assets/images';
import { compSty } from '~/common/styles';
import { SfView, BTN, TxtInP, SelectSwitch, BorderBTN } from '~/components';
import { _COL, RIPPLE_IC, _WIDTH } from '~/utils';

const ProfileController = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState("male")

  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  return (
    <SfView ctr bgCol={_COL.WHITE}>
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
        onSubE={() => Keyboard?.dismiss()}
        rKeyT="done"
      />
      <SelectSwitch
        Data={[{ label: "Male", value: "male" }, { label: "Female", value: "female" }]}
        onP={(e: any) => console.log(e)}
      />
      <BTN /* onP={onSubmit} */ rounded vSty={{ width: "85%", marginVertical: 20 }} title="SAVE" />
      <BTN /* onP={onSubmit} */ rounded vSty={{ width: "85%", padding: 2 }}
        avSTy={{ backgroundColor: _COL.WHITE, borderRadius: 4 }} title="Change Password" tSty={{ color: _COL.BLUISH }} />
    </SfView>
  )
}

export default ProfileController;