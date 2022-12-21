import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppContainer from './AppContainer'
import FullAccountView from './FullAccountView'

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component="AppContainer"/>
      <Stack.Screen name="FullAccountView" component="FullAccountView"/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};
