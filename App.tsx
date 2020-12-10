import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from "react-router-native";
import { store } from './redux/store';
import { LoginScreen } from './screens/Login';
import { ProfileScreen } from './screens/Profile';
import { SplashScreen } from './screens/Splash';

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={SplashScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/profile" component={ProfileScreen} />
      </NativeRouter>
    </Provider>
  );
};
export default App;
