import { Tabs } from "expo-router";
import { View } from "react-native-web";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function tabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1a1a1a",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          tabBarLabel: "Inicio",
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart-outline" size={24} color={color} />
          ),
          tabBarLabel: "Estadísticas",
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={30} color="#124E2B" />
          ),
          tabBarLabel: "Agregar",
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="Trophy" size={24} color={color} />
          ),
          tabBarLabel: "Partidos",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          tabBarLabel: "Perfil",
        }}
      />
    </Tabs>
  );
}
