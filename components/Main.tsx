import { View, Text } from "react-native";
import MainCard from "./MainCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function Main() {
  return (
    <View className="bg-primary-greenBg w-full h-full px-5 py-2 pt-10 flex flex-col items-center gap-2">
      <Text className="text-primary-whiteCardBg text-3xl font-bold">
        Que onda mufa?
      </Text>
      <Text className="text-primary-whiteCardBg text-lg">
        Rastrea tu asistencia y fijate si sos mufa o no
      </Text>
      <View className="w-full flex flex-row gap-5 justify-center">
        <MainCard>
          <AntDesign name="Trophy" size={24} color="black" />
          <Text className="text-primary-black text-3xl font-extrabold">12</Text>
          <Text className="text-primary-black text-2xl font-semibold">
            Partidos
          </Text>
        </MainCard>
        <MainCard>
          <Feather name="trending-down" size={24} color="red" />
          <Text className="text-primary-black text-3xl font-extrabold">
            65%
          </Text>
          <Text className="text-primary-black text-2xl font-semibold">
            Mufa
          </Text>
        </MainCard>
      </View>
    </View>
  );
}
