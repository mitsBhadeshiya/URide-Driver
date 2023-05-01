import React, { useRef, useState } from 'react';
import { Keyboard, TextInput } from 'react-native';
import { BANK_ICON, DOC_IC, EMAIL_IC, LOCATION_ICON, PASSWORD_IC, USER_IC } from '~/common/assets/images';
import { BTN, SfView, TxtInP } from '~/components';
import { _COL } from '~/utils';

const ManageBankDetController = () => {
  const [acNum, setAcNum] = useState('');
  const [bankName, setBankName] = useState('');
  const [bic, setBIC] = useState('');
  const [email, setEmail] = useState('');
  const [holder, setHolder] = useState('');
  const [bankLoc, setBankLoc] = useState('');

  const holderRef = useRef<TextInput>(null);
  const bLocRef = useRef<TextInput>(null);
  const bNameRef = useRef<TextInput>(null);
  const bicRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <TxtInP
        val={acNum}
        onChangeT={setAcNum}
        pHolder="Account Number"
        vSty={{ marginTop: 30, width: '85%' }}
        rIc={<DOC_IC />}
        tProps={{ keyboardType: "numeric" }}
        onSubE={() => holderRef?.current?.focus()}
      />
      <TxtInP
        reff={holderRef}
        val={holder}
        onChangeT={setHolder}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<USER_IC />}
        pHolder="Account Holder"
        onSubE={() => bNameRef?.current?.focus()}
      />
      <TxtInP
        reff={bNameRef}
        val={bankName}
        onChangeT={setBankName}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<BANK_ICON />}
        pHolder="Bank Name"
        onSubE={() => bLocRef?.current?.focus()}
      />
      <TxtInP
        reff={bLocRef}
        val={bankLoc}
        onChangeT={setBankLoc}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<LOCATION_ICON />}
        pHolder="Bank Location"
        tProps={{ keyboardType: "number-pad" }}
        onSubE={() => emailRef?.current?.focus()}
      />
      <TxtInP
        reff={emailRef}
        val={email}
        onChangeT={setEmail}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<EMAIL_IC />}
        pHolder="Payment Email"
        tProps={{ keyboardType: 'email-address', autoCapitalize: 'none', autoCorrect: false, autoComplete: "email" }}
        onSubE={() => bicRef?.current?.focus()}
      />
      <TxtInP
        reff={bicRef}
        val={bic}
        onChangeT={setBIC}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<PASSWORD_IC />}
        pHolder="BIC/SWIFT Code"
        tProps={{ keyboardType: "numeric" }}
        onSubE={() => Keyboard?.dismiss()}
        rKeyT="go"
      />
      <BTN title="SAVE" rounded vSty={{ width: "84%", marginTop: "10%" }} />
    </SfView>
  )
}

export default ManageBankDetController;