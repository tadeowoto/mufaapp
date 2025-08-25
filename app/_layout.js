import { StatusBar, View } from "react-native";
import { Slot, Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import "../global.css";

export default function Layout() {
  const insetts = useSafeAreaInsets();

  return (
    <View
      style={{ flex: 1, paddingTop: insetts.top }}
      className="bg-primary-greenBg"
    >
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Slot />
      </SafeAreaProvider>
    </View>
  );
}
