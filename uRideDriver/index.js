/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { enableLatestRenderer } from 'react-native-maps';
import 'react-native-gesture-handler';

enableLatestRenderer();
AppRegistry.registerComponent(appName, () => App);
