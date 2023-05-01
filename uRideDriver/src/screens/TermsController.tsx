import React from 'react';
import { View, Text } from 'react-native';
import { gSty } from '~/common/styles';
import { SfView } from '~/components';
import { _COL, FONT } from '~/utils';

const TermsController = () => {
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <Text style={[gSty.txt, { fontFamily: FONT.SEMI_BOLD, textAlign: "auto" }]}>1. General</Text>
      <Text style={[gSty.txt, { textAlign: "auto" }]}>
        These Terms and Conditions ("Agreement") governs the use of the services ("Service") that are made available by Website.com Solutions Inc. ("Website.com", "we" or "us"). These Terms and Conditions represent the whole agreement and understanding between Website.com and the individual or entity who subscribes to our service ("Subscriber" or "you").

        PLEASE READ THIS AGREEMENT CAREFULLY. By submitting your application and by your use of the Service, you agree to comply with all of the terms and conditions set out in this Agreement. Website.com may terminate your account at any time, with or without notice, for conduct that is in breach of this Agreement, for conduct that Website.com believes is harmful to its business, or for conduct where the use of the Service is harmful to any other party.

        Website.com may, in its sole discretion, change or modify this Agreement at any time, with or without notice. Such changes or modifications shall be made effective for all Subscribers upon posting of the modified Agreement to this web
      </Text>
    </SfView>
  )
}

export default TermsController;