import { View, Text } from "react-native";
import MainCard from "./MainCard";

export default function Main() {
  return (
    <View className="bg-primary-greenBg w-full h-full px-5 py-2">
      <Text>Que onda??</Text>
      <MainCard>
        <Text className="text-primary-grayDark">Main</Text>
      </MainCard>
    </View>
  );
}
