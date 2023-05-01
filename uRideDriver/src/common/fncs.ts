import { Alert, PermissionsAndroid, ToastAndroid } from "react-native";

type destionation = {
    latitude: number;
    longitude: number;
}[];
type destionationType = {
    latitude: number;
    longitude: number;
};


const findRegion = (desData: destionation) => {
    //find the region of the 2 destination with some margin
    let minLat = desData[0].latitude;
    let maxLat = desData[0].latitude;
    let minLng = desData[0].longitude;
    let maxLng = desData[0].longitude;
    for (let i = 1; i < desData.length; i++) {
        if (desData[i].latitude < minLat) {
            minLat = desData[i].latitude;
        }
        if (desData[i].latitude > maxLat) {
            maxLat = desData[i].latitude;
        }
        if (desData[i].longitude < minLng) {
            minLng = desData[i].longitude;
        }
        if (desData[i].longitude > maxLng) {
            maxLng = desData[i].longitude;
        }
    }
    return {
        latitude: (minLat + maxLat) / 2,
        longitude: (minLng + maxLng) / 2,
        latitudeDelta: (maxLat - minLat) * 1.5,
        longitudeDelta: (maxLng - minLng) * 1.5
    }
}

const findInitalRegion = (desData: destionationType) => {
    return {
        latitude: desData.latitude,
        longitude: desData.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }
}

async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            /*   {
                  'title': 'Example App',
                  'message': 'Example App access to your location '
              } */
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location")
            /* Alert.alert("You can use the location"); */
            ToastAndroid.show("You can use the location", ToastAndroid.SHORT);
        } else {
            console.log("location permission denied")
            Alert.alert("Location permission denied");
        }
    } catch (err) {
        console.warn(err)
    }
}


export { findRegion }