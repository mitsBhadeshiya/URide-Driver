import React, { useRef, useState } from 'react';
import { TextInput, Keyboard } from 'react-native';
import { CARD_IC, CREDIT_CARD_ICON, DATE_IC, PASSWORD_IC } from '~/common/assets/images';
import { SfView, BTN, TxtInP } from '~/components';
import { _COL, _WIDTH } from '~/utils';

const PaymentController = () => {
  const [cardNum, setCardNum] = useState('');
  const [eDate, setEdate] = useState('');
  const [cvv, setCVV] = useState('');

  const eDateRef = useRef<TextInput>(null);
  const cvvRef = useRef<TextInput>(null);
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <CREDIT_CARD_ICON width={_WIDTH * .84} height={_WIDTH * .6} />

      <TxtInP
        val={cardNum}
        onChangeT={setCardNum}
        pHolder="Card Number"
        vSty={{ marginTop: 30, width: '85%' }}
        rIc={<CARD_IC />}
        tProps={{ keyboardType: "numeric" }}
        onSubE={() => eDateRef?.current?.focus()}
      />
      <TxtInP
        reff={eDateRef}
        val={eDate}
        onChangeT={setEdate}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<DATE_IC />}
        pHolder="Expiry Date"
        tProps={{ keyboardType: "numeric" }}
        onSubE={() => cvvRef?.current?.focus()}
      />
      <TxtInP
        reff={cvvRef}
        val={cvv}
        onChangeT={setCVV}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<PASSWORD_IC />}
        pHolder="CVV"
        tProps={{ keyboardType: "numeric" }}
        onSubE={() => Keyboard?.dismiss()}
        rKeyT="go"
      />
      <BTN title="SAVE" rounded vSty={{ width: "84%", marginTop: "10%" }} />
    </SfView>
  )
}

export default PaymentController;