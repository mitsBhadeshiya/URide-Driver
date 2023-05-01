import { StyleSheet } from "react-native";
import { FONT, _COL, _WIDTH } from "~/utils";
import { mSty } from "./AppSty";
import { aSty, compSty } from "./AuthS";

const sty = StyleSheet.create({
    ctrf1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    ctrf1w100: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    ctr: {
        alignItems: "center",
        justifyContent: "center",
    },
    ctrf1A: {
        flex: 1,
        alignItems: "center"
    },
    ctrf1ApBG: {
        flex: 1,
        alignItems: "center",
        backgroundColor: _COL.PRIMARY
    },
    f1W100Bg: {
        flex: 1,
        alignItems: "center",
        backgroundColor: _COL.PRIMARY,
        width: "100%"
    },
    f1W100wBg: {
        flex: 1,
        alignItems: "center",
        backgroundColor: _COL.WHITE,
        width: "100%"
    },
    f1BG: {
        flex: 1,
        backgroundColor: _COL.PRIMARY
    },
    ctrf1ApWbg: {
        flex: 1,
        alignItems: "center",
        backgroundColor: _COL.WHITE
    },
    f1JeBG: {
        flex: 1,
        alignItems: "center",
        backgroundColor: _COL.PRIMARY,
        justifyContent: "flex-end"
    },
    f1CtrBg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: _COL.PRIMARY,
    },
    f1CtrW100: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    rowJeW100: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%"
    },
    rowAc: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowAcJ: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    f1W100: {
        flex: 1,
        width: "100%"
    },
    f1W100wBG: {
        flex: 1,
        width: "100%",
        backgroundColor: _COL.WHITE
    },
    flexCtrW: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: _COL.WHITE
    },
    ctrRow100: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    Row100Jsb: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    Row100Jsa: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    w100CtrBg: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: _COL.PRIMARY
    },
});


const gSty = StyleSheet.create({
    splashTxt: {
        fontSize: _WIDTH * 0.085,
        color: _COL.WHITE,
        fontFamily: FONT.JOSEFIN_BOLD,
        textAlign: "center"
    },
    splashTxt2: {
        fontSize: _WIDTH * 0.045,
        color: _COL.WHITE,
        fontFamily: FONT.SEMI_BOLD,
        textAlign: "center",
        marginTop: _WIDTH * 0.02
    },
    titleTxt: {
        fontSize: _WIDTH * 0.085,
        color: _COL.WHITE,
        fontFamily: FONT.JOSEFIN_BOLD,
        textAlign: "center",
        marginBottom: 25,
        paddingStart: "3%"
    },
    logoV: {
        padding: 30,
        backgroundColor: _COL.BLUISH,
        borderRadius: _WIDTH * .5,
        alignItems: "center",
        justifyContent: "center"
    },
    logoTxt: {
        fontSize: _WIDTH * 0.085,
        color: _COL.BLUISH,
        fontFamily: FONT.JOSEFIN_BOLD,
        textAlign: "center",
        marginVertical: _WIDTH * 0.05
    },
    txt: {
        fontSize: 15,
        color: _COL.BLACK,
        fontFamily: FONT.REGULAR,
        textAlign: "center",
        width: "90%",
        marginTop: _WIDTH * 0.05
    },
    txtSb: {
        fontSize: 15,
        color: _COL.BLACK,
        fontFamily: FONT.SEMI_BOLD,
        textAlign: "center",
        width: "90%",
        marginTop: _WIDTH * 0.035
    },
    numT: {
        fontFamily: FONT.SEMI_BOLD,
        fontSize: 25,
        color: _COL.PRIMARY_BLACK,
        textAlign: "center",
        marginTop: _WIDTH * 0.03
    },
    gradientHeader: {
        padding: _WIDTH * 0.05,
        width: "100%",
        justifyContent: "center",
        alignItems: "baseline"
    },
    totalTxt: {
        fontSize: 25,
        fontFamily: FONT.BOLD,
        color: _COL.WHITE,
        textAlign: "center",
        alignSelf: "center",
        marginBottom: 12
    },
    totalTxt2: {
        fontSize: 17,
        fontFamily: FONT.SEMI_BOLD,
        color: _COL.WHITE,
        textAlign: "center",
        alignSelf: "center"
    }
});

export { sty, gSty, aSty, compSty, mSty };