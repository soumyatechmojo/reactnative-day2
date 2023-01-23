import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackAction } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
import Home from './screens/Home';
import Projectlist from './screens/Projectlist';

export default function App() {
  return (
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name="Projectlist"
          component={Projectlist}
          options={({route})=>{
            return ({title:route.params.title,
              headerStyle:{backgroundColor:route.params.color},
              headerTintColor:"white"})
          }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}
