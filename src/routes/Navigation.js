import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
// TODO Importar cada una de las pantallas
import HomeScreen from "../screens/HomeScreen";
import SebastianBarcelona from "../screens/SebastianBarcelona";
import RodrigoRoselli from "../screens/RodrigoRoselli";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: "Principal",
            headerStyle: {
              backgroundColor: "#89CFF0",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <Stack.Screen
          name="SebastianBarcelona"
          component={SebastianBarcelona}
          options={{
            title: "Sebastian Barcelona",
            headerStyle: {
              backgroundColor: "#89CFF0",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="RodrigoRoselli"
          component={RodrigoRoselli}
          options={{
            title: "Rodrigo Roselli",
            headerStyle: {
              backgroundColor: "#89CFF0",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
