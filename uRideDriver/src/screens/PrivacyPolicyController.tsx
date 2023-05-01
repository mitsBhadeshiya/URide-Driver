import React from 'react';
import { View, Text } from 'react-native';
import { gSty } from '~/common/styles';
import { SfView } from '~/components';
import { FONT, _COL } from '~/utils';

const PrivacyPolicyController = () => {
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <Text style={[gSty.txt, { fontFamily: FONT.SEMI_BOLD, textAlign: "auto" }]}>Privacy Policy for Company Name</Text>
      <Text style={[gSty.txt, { textAlign: "auto" }]}>
        At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.

        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at Email@Website.com
      </Text>
      <Text style={[gSty.txt, { fontFamily: FONT.SEMI_BOLD, textAlign: "auto" }]}>Log Files</Text>
      <Text style={[gSty.txt, { textAlign: "auto" }]}>
        Website Name follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
      </Text>
    </SfView>
  )
}

export default PrivacyPolicyController;