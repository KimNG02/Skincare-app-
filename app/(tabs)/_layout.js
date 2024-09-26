import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#594359",
        tabBarHideOnKeyboard: true,
      }}
      backBehavior="history"
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Hem",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Scanner"
        options={{
          title: "Skanna här",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="line-scan" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Min profil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-woman-profile"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="[Product]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
