import { Dimensions, Platform, PressableAndroidRippleConfig } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { kBehavior } from "~/types";
import { HATCHBACK_IMG, LUXURY_IMG, SEDAN_IMG, SUV_IMG } from "~/common/assets/images";


const AppStack = createStackNavigator();
const HomeTabs = createBottomTabNavigator();

const _WIDTH = Dimensions.get('window').width;
const _HEIGHT = Dimensions.get('window').height;

const _COL = {
  "PRIMARY": "#6deded",
  "PRIMARY_DARK": "#4dd0d0",
  "SECONDARY": "#627fca",
  "SECONDARY_DARK": "#4d5b9a",
  "BLUISH": "#2193b0",
  "LIGHT_BLUISH": "#6dd5ed",
  "WHITE": "#ffffff",
  "WHITE_DF": "#dfdfdf",
  "PRIMARY_BG": "#eff2f9",
  "BLACK": "#000000",
  "TRANSPARENT": "transparent",
  "DARK_SEAFOAM_GREEN": "#3fb17c",
  "GREENISH_TEAL": "#2ec97d",
  "BROWNISH_PINK": "#cc7676",
  "RED_BG": "#fae7e7",
  "GREEN_BG": "#f0f8f4",
  "GRAY": "#cccccc",
  "GRAY66": "#666666",
  "WARM_GRAY": "#9B9B9B",
  "BG": "#F4F4F4",
  "F9": "#f9f9f9",
  "F8": "#f8f8f8",
  "F6": "#f6f6f6",
  "F0": "#f0f0f0",
  "E9": "#e9e9e9",
  "EEE": "#eeeeee",
  "BG2": "#EAEAF4",
  "BORDER": "#DFDFDF",
  "PALE_GREY5": '#f6f7f9',
  "PRIMARY_BLACK": '#232323',
  "LIGHT_BLUE": '#00A6FF',
  "DENIM_BLUE": '#3b5999',
  "DARK_DENIM_BLUE": '#2f477a',
  "TWILIGHT": "#47457e",
  "FADED_ORANGE": '#ee6d63',
  "GOOGLE_ORANGE": '#dd4b39',
  "GOOGLE_BLACK": "#232323",
  "FACEBOOK_BLUE": "#385c8e",
  "CLOUDY_BLUE_DARK": '#9baac6',
  "DARK_NAVY_BLUE": '#000018',
  "VERY_LIGHT_PINK": '#e9e9e9',
  "VERY_LIGHT_PINK4": '#f0f0f0',
  "BLACK005": "rgba(0,0,0,.05)",
  "BLACK01": "rgba(0,0,0,.1)",
  "BLACK02": "rgba(0,0,0,.2)",
  "BLACK03": "rgba(0,0,0,.3)",
  "BLACK04": "rgba(0,0,0,.4)",
  "BLACK05": "rgba(0,0,0,.5)",
  "BLACK06": "rgba(0,0,0,.6)",
  "BLACK07": "rgba(0,0,0,.7)",
  "BLACK08": "rgba(0,0,0,.8)",
  "BLACK09": "rgba(0,0,0,.9)",
  "WHITE01": "rgba(256,256,256,0.1)",
  "WHITE02": "rgba(256,256,256,0.2)",
  "WHITE03": "rgba(256,256,256,0.3)",
  "WHITE04": "rgba(256,256,256,0.4)",
  "WHITE05": "rgba(256,256,256,0.5)",
  "WHITE06": "rgba(256,256,256,0.6)",
  "WHITE07": "rgba(256,256,256,0.7)",
  "WHITE08": "rgba(256,256,256,0.8)",
  "WHITE09": "rgba(256,256,256,0.9)",
  "PRIMARY01": 'rgba(250, 206, 36,.1)',
  "PRIMARY02": 'rgba(250, 206, 36,.2)',
  "PRIMARY03": 'rgba(250, 206, 36,.3)',
  "PRIMARY04": 'rgba(250, 206, 36,.4)',
  "PRIMARY05": 'rgba(250, 206, 36,.5)',
  "PRIMARY06": 'rgba(250, 206, 36,.6)',
  "PRIMARY07": 'rgba(250, 206, 36,.7)',
  "PRIMARY08": 'rgba(250, 206, 36,.8)',
  "PRIMARY09": 'rgba(250, 206, 36,.9)',
  "PRIMARY_DARK01": 'rgba(200, 164, 28,.1)',
  "PRIMARY_DARK02": 'rgba(200, 164, 28,.2)',
  "PRIMARY_DARK03": 'rgba(200, 164, 28,.3)',
  "PRIMARY_DARK04": 'rgba(200, 164, 28,.4)',
  "PRIMARY_DARK05": 'rgba(200, 164, 28,.5)',
  "PRIMARY_DARK06": 'rgba(200, 164, 28,.6)',
  "PRIMARY_DARK07": 'rgba(200, 164, 28,.7)',
  "PRIMARY_DARK08": 'rgba(200, 164, 28,.8)',
  "PRIMARY_DARK09": 'rgba(200, 164, 28,.9)',
  "CLOUDY_BLUE003": 'rgba(181, 180, 203, 0.03)',
  "CLOUDY_BLUE007": 'rgba(181, 180, 203, 0.07)',
  "CLOUDY_BLUE01": 'rgba(181, 180, 203, 0.1)',
  "CLOUDY_BLUE02": 'rgba(181, 180, 203, 0.2)',
  "CLOUDY_BLUE03": 'rgba(181, 180, 203, 0.3)',
  "CLOUDY_BLUE04": 'rgba(181, 180, 203, 0.4)',
  "CLOUDY_BLUE06": 'rgba(181, 180, 203, 0.6)',
  "CLOUDY_BLUE08": 'rgba(181, 180, 203, 0.8)',
  "CLOUDY_BLUE99": 'rgba(181, 180, 203, 0.99)',
  "PRIMARY_PERIWINKLE": "#948BFF",
  "PRIMARY_PERIWINKLE05": "rgba(148, 139, 255, .5)",
  "PRIMARY_PERIWINKLE2": "#C8A2C8",
}

const FONT = {
  "BOLD": "OpenSans-Bold",
  "BOLD_ITALIC": "OpenSans-BoldItalic",
  "EXTRA_BOLD": "OpenSans-ExtraBold",
  "EXTRA_BOLD_ITALIC": "OpenSans-ExtraBoldItalic",
  "ITALIC": "OpenSans-Italic",
  "LIGHT": "OpenSans-Light",
  "LIGHT_ITALIC": "OpenSans-LightItalic",
  "MEDIUM": "OpenSans-Medium",
  "MEDIUM_ITALIC": "OpenSans-MediumItalic",
  "REGULAR": "OpenSans-Regular",
  "SEMI_BOLD": "OpenSans-SemiBold",
  "SEMI_BOLD_ITALIC": "OpenSans-SemiBoldItalic",
  "JOSEFIN_BOLD": "JosefinSans-Bold",
  "JOSEFIN_BOLD_ITALIC": "JosefinSans-BoldItalic",
  "JOSEFIN_EXTRA_LIGHT": "JosefinSans-ExtraLight",
  "JOSEFIN_EXTRA_LIGHT_ITALIC": "JosefinSans-ExtraLightItalic",
  "JOSEFIN_ITALIC": "JosefinSans-Italic",
  "JOSEFIN_LIGHT": "JosefinSans-Light",
  "JOSEFIN_LIGHT_ITALIC": "JosefinSans-LightItalic",
  "JOSEFIN_MEDIUM": "JosefinSans-Medium",
  "JOSEFIN_MEDIUM_ITALIC": "JosefinSans-MediumItalic",
  "JOSEFIN_REGULAR": "JosefinSans-Regular",
  "JOSEFIN_SEMI_BOLD": "JosefinSans-SemiBold",
  "JOSEFIN_SEMI_BOLD_ITALIC": "JosefinSans-SemiBoldItalic",
  "JOSEFIN_THIN": "JosefinSans-Thin",
  "JOSEFIN_THIN_ITALIC": "JosefinSans-ThinItalic"
}

const kAvoidSty: kBehavior = Platform.OS === "ios" ? "padding" : undefined;
const calendarHeaderFormat = "MMMM YYYY"

const defUser = {
  _id: "",
  fName: "",
  lName: "",
  phoneNo: "",
  profileIC: { uri: "" }
};

const { height: D_HEIGHT, width: D_WIDTH } = (() => {
  const { width, height } = Dimensions.get('window');
  if (width === 0 && height === 0) { return Dimensions.get('screen'); }
  return { width, height };
})();

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const IS_IPHONE_X = (() => {
  if (Platform.OS === 'web') {
    return false;
  }
  return (
    (Platform.OS === 'ios' &&
      ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
        (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))) ||
    (D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
    (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT)
  );
})();

const RIPPLE_BTN: PressableAndroidRippleConfig = { color: _COL.WHITE03, radius: _WIDTH * .46, borderless: true, foreground: true };
const RIPPLE_BTNr: PressableAndroidRippleConfig = { color: _COL.WHITE03, borderless: true, foreground: true };
const RIPPLE_IcBTN: PressableAndroidRippleConfig = { color: _COL.CLOUDY_BLUE_DARK, borderless: true, foreground: true };
const RIPPLE_IC: PressableAndroidRippleConfig = { color: _COL.CLOUDY_BLUE01, borderless: true };
const RIPPLE_ICf: PressableAndroidRippleConfig = { color: _COL.CLOUDY_BLUE01, borderless: true, foreground: true };

const CarSelArr = [
  { label: "Hatchback", value: "0", imageIcon: HATCHBACK_IMG },
  { label: "SUV", value: "1", imageIcon: SUV_IMG },
  { label: "Sedan", value: "2", imageIcon: SEDAN_IMG },
  { label: "Luxury", value: "3", imageIcon: LUXURY_IMG }
];

const customMapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffb606',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffb606',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#00ff00',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];

export {
  AppStack, HomeTabs, _WIDTH, _HEIGHT, _COL, FONT, defUser, kAvoidSty, IS_IPHONE_X,
  calendarHeaderFormat, RIPPLE_BTN, RIPPLE_IcBTN, RIPPLE_IC, RIPPLE_ICf, CarSelArr,
  RIPPLE_BTNr, customMapStyle
};