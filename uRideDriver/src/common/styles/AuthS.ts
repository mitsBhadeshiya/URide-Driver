import { StyleSheet } from "react-native";
import { FONT, _COL, _HEIGHT, _WIDTH } from "~/utils";

const aSty = StyleSheet.create({
    lCard: {
        borderRadius: 5,
        backgroundColor: _COL.WHITE,
        shadowColor: _COL.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "85%",
        overflow: "hidden",
        marginVertical: _HEIGHT * 0.05,
    },
    lCardV: {
        padding: _WIDTH * .06,
        paddingBottom: _WIDTH * .025,
    },
    lCardH: {
        textAlign: "left",
        fontFamily: FONT.SEMI_BOLD,
        fontSize: _WIDTH * .05,
        color: _COL.BLACK,
    },
    sBTN: {},
    sCard: {
        borderRadius: 7,
        backgroundColor: _COL.F9,
        justifyContent: "center",
        alignItems: "center",
        height: _WIDTH * .4,
        width: _WIDTH * .4,
        margin: _WIDTH * 0.065,
        marginRight: 0,
        marginBottom: 0
    },
    sCard2: {
        borderRadius: 7,
        backgroundColor: _COL.F9,
        justifyContent: "center",
        alignItems: "center",
        height: _WIDTH * .4,
        width: _WIDTH * .4,
        margin: _WIDTH * 0.065,
        marginLeft: 0,
        marginBottom: 0
    },
});

const compSty = StyleSheet.create({
    txtIpV: {
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        borderRadius: 5,
        backgroundColor: _COL.F9,
        padding: 2
    },
    txtIp: {
        flex: 1,
        paddingHorizontal: 5,
        fontFamily: FONT.MEDIUM,
        fontSize: _WIDTH * .037,
        color: _COL.BLACK,
        paddingVertical: 7,
    },
    fPassTxt: {
        width: "100%",
        fontFamily: FONT.REGULAR,
        fontSize: _WIDTH * .037,
        color: _COL.BLACK,
        textAlign: "right",
        padding: 5,
        marginTop: 10,
    },
    orTxt: {
        fontFamily: FONT.REGULAR,
        fontSize: _WIDTH * .04,
        color: _COL.WHITE,
        textAlign: "center"
    },
    /*--- LinearGradient BTN ---*/
    lgBtnV: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    lgBtnVr: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        overflow: "hidden"
    },
    lgBtn: {
        padding: 14,
        width: "100%",
    },
    lgBtnTxt: {
        fontFamily: FONT.SEMI_BOLD,
        fontSize: _WIDTH * .04,
        color: _COL.WHITE,
        textAlign: "center",
        width: "100%",
    },
    pBtnTxt: {
        fontFamily: FONT.SEMI_BOLD,
        fontSize: _WIDTH * .04,
        color: _COL.BLUISH,
        /* textAlign: "center", */
        width: "100%",
        padding: 5
    },
    pBtn: {
        padding: 14,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        /* marginHorizontal: "5%" */
    },
    /*--- Icon BTN ---*/
    icBtnV: {
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: _COL.WHITE,
        margin: _WIDTH * .02,
        paddingVertical: 5,
        marginVertical: _HEIGHT * .05,
        shadowColor: _COL.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    icBtnVr: {
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: _COL.WHITE,
        margin: _WIDTH * .02,
        marginVertical: _HEIGHT * .05,
        shadowColor: _COL.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .2,
        shadowRadius: 5,
        elevation: 7
    },
    icBtn: {
        padding: 14,
        paddingVertical: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    icBtnTxt: {
        fontFamily: FONT.SEMI_BOLD,
        fontSize: _WIDTH * .04,
        color: _COL.WHITE,
        textAlign: "center"
    },
    /*--- Reg ---*/
    pPicV: {
        padding: _WIDTH * .16,
        aspectRatio: 1,
        borderRadius: _WIDTH * .2,
        backgroundColor: _COL.F9,
        justifyContent: "center",
        alignItems: "center",
    },
    /*--- Checkbox ---*/
    cbV: {
        margin: 5,
        borderRadius: 5,
        backgroundColor: _COL.F0,
        shadowColor: _COL.BLACK01,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        aspectRatio: 1
    },
    cb: {
        padding: 7,
        justifyContent: "center",
        alignItems: "center",
    },
    AggreTxt: {
        /* width: "80%", */
        fontFamily: FONT.REGULAR,
        fontSize: _WIDTH * .037,
        color: _COL.BLACK,
        paddingStart: _WIDTH * .03
    },
    AggreV: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: _WIDTH * .075,
        marginVertical: _HEIGHT * .05,
        flexDirection: "row",
    },
    HandicapV: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: _WIDTH * .075,
        marginVertical: _HEIGHT * .07,
        flexDirection: "row",
    },
    HandicapTxt: {
        fontFamily: FONT.SEMI_BOLD,
        fontSize: _WIDTH * .04,
        color: _COL.GOOGLE_BLACK,
        textAlign: "left"
    },
    TitleTxt: {
        fontFamily: FONT.SEMI_BOLD,
        fontSize: _WIDTH * .04,
        color: _COL.GOOGLE_BLACK,
        textAlign: "left",
        alignSelf: "baseline",
        marginHorizontal: _WIDTH * .08,
        marginTop: _HEIGHT * .07,
        marginBottom: _HEIGHT * .005
    }
});

export { aSty, compSty };