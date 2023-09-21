import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./components/splash/Splash";
import OnBoarding1 from "./components/onBoarding1/OnBoarding1";
import OnBoarding2 from "./components/onBoarding2/OnBoarding2";

const Stack = createNativeStackNavigator();

const App = () => {
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: 0,
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: forFade,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ cardStyleInterpolator: forFade }}
        />
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
