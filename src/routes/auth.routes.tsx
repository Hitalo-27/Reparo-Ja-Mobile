import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Login } from "../screens/Login";
import { CadastroCliente } from "../screens/CadastroCliente";
import { CadastroAutonomo } from "../screens/CadastroAutonomo";

import { theme } from "../global/styles/theme";
import { IndexRestrita } from "../screens/IndexRestrita";
import { QuemSomos } from "../screens/QuemSomos";
import { ContatoRestrito } from "../screens/ContatoRestrito";
import { ServicosRestrito } from "../screens/ServicosRestrito";
import { MinhaContaRestrita } from "../screens/MinhaContaRestrita";
import { FabButton } from "../components/FabButton";
import ChatsScreen from "../screens/Chat";
import ContactsScreen from "../screens/Contacts/ContactsScreen";
import ChatRoomScren from "../screens/ChatRoom";


export const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Serviços") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Quem Somos") {
            iconName = focused ? "information" : "information-outline";
          } else if (route.name === "Contato") {
            iconName = focused ? "message-text" : "message-text-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chat-plus" : "chat-plus-outline";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={28} color={color} />
          );
        },
        tabBarActiveTintColor: theme.colors.color,
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: false,

        tabBarStyle: {
          borderTopColor: "transparent",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={IndexRestrita}
        options={{
          headerTintColor: theme.colors.color,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Serviços"
        component={ServicosRestrito}
        options={{
          headerTintColor: theme.colors.color,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="QuemSomos"
        component={QuemSomos}
        options={{
          headerTintColor: theme.colors.color,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <FabButton focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={ContatoRestrito}
        options={{
          headerTintColor: theme.colors.color,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatsScreen}
        options={{
          headerTintColor: theme.colors.color,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: theme.colors.color,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastroCliente"
        component={CadastroCliente}
        options={{
          headerTintColor: theme.colors.color,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastroAutonomo"
        component={CadastroAutonomo}
        options={{
          headerTintColor: theme.colors.color,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="IndexRestrita"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Minha Conta"
        component={MinhaContaRestrita}
        options={{
          headerTintColor: theme.colors.color,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScren}
        options={({ route })  => ({
          title: route.params.name,
          headerTintColor: theme.colors.color,
        })}
      />

      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          headerTintColor: theme.colors.color,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
