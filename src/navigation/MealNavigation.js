import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FirstScreen from "../screens/Home";
import FilterMealByCategoryScreen from "../screens/FilterMealByCategoryScreen";
import MealDetail from "../screens/MealDetail";
import FavoriteScreen from "../screens/FavoriteScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Category" component={FirstScreen} />
      <Stack.Screen name="FilterMealByCategoryScreen" component={FilterMealByCategoryScreen} />
      <Stack.Screen name="MealDetail" component={MealDetail} />
    </Stack.Navigator>
  );
}
function FavoriteStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Stack.Screen name="MealDetail" component={MealDetail} />
    </Stack.Navigator>
  );
}
export default function MealNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "#5ED240" }}
      >
        <Tab.Screen
          name="Categories"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="happy-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
