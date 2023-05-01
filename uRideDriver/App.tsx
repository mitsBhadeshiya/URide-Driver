import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '~/context/store';
import { App_Stack } from '~/router';
import { SplashScr } from '~/screens';
const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScr />} persistor={persistor}>
        <NavigationContainer >
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <App_Stack />
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider >
  );
};

export default App;
