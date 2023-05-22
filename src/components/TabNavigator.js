import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Settings from "../screens/Settings";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainScreen from "../screens/MainScreen";
import Forums from "../screens/forums";
import Therapy from "../screens/therapy";

import guidedJournaling from "../components/Navigation"
import AnxietyTests from './AnxietyNavigator'
import Profile from './ProfileStack'
import DepressionTests from './DepressionNavigator'
import Insights from './InsightsTab'
import InsightsProfile from './ProfileStack'
import DailyTasks from './DailyTaskStack'
import PyschologicalProfile from './MoodsScreensNavigator'



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" component={MainScreen}  options={{
          headerShown: false, 
          tabBarIcon: () => {
            return <Ionicons name="md-home-outline" size={24} color="black" />;
          },
        }}/>
      <Tab.Screen name="Forum" component={Forums} options={{
          headerShown: false,}}      
    />
      <Tab.Screen name="Therapy" component={Therapy} />
      <Tab.Screen name="Task" component={DailyTasks} options={{          
          headerShown: false,
        }}/>
      <Tab.Screen
        name="Insight Profile"
        component={InsightsProfile}
        options={{
          title: "Profile",          
        }}
      />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
