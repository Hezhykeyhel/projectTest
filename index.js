/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Instrumentation, LoggingLevel} from '@appdynamics/react-native-agent';

Instrumentation.start({
  appKey: 'EC-AAC-AYA',
  collectorURL: 'https://fra-col.eum-appdynamics.com',
  loggingLevel: LoggingLevel.VERBOSE,
});

AppRegistry.registerComponent(appName, () => App);
