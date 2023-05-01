import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";
import { BACK_IC } from "./assets/images";

const navOptions = (t: string) => {
    const navOption: StackNavigationOptions = {
        headerShown: true,
        headerTitleAlign: "center",
        headerTitle: t,
        headerBackImage: () => <BACK_IC style={{ marginStart: 3 }}/>,
        headerBackTitleVisible: false
    }
    return navOption;
}

export { navOptions };