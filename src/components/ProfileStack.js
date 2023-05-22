import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InsightsProfile from "../screens/InsightsProfile";
import MoodsScreen from "./MoodsScreensNavigator"
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
//    <NavigationContainer>
      <Stack.Navigator>      
        <Stack.Screen
          name="InsightsProfile"
          component={InsightsProfile}
          options={{
            headerShown:false
            // headerRight: () => <GuiedJournalingHeader />,
          }}
        /> 
        <Stack.Screen
          name="View Psychologcial Profile"
          component={MoodsScreen}
          options={{
            headerShown:false
            // headerRight: () => <GuiedJournalingHeader />,
          }}
        /> 
      </Stack.Navigator>
    
  );
};

export default Navigation;
