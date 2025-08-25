import { View, Text } from "react-native";
import MainCard from "./MainCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useStats } from "@/context/Stats";
import { use } from "react";

export default function Main() {
  const matches = useStats((state) => state.matches);
  const allMatches = useStats((state) => state.userStats.allMatches);
  const mufaPercentage = useStats((state) => state.userStats.mufaPercentage);

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
          <Text className="text-primary-black text-3xl font-extrabold">
            {allMatches}
          </Text>
          <Text className="text-primary-black text-2xl font-semibold">
            Partidos
          </Text>
        </MainCard>
        <MainCard>
          <Feather name="trending-down" size={24} color="red" />
          <Text className="text-primary-black text-3xl font-extrabold">
            {mufaPercentage}%
          </Text>
          <Text className="text-primary-black text-2xl font-semibold">
            Mufa
          </Text>
        </MainCard>
      </View>
      <View className="w-full  h-full">
        <Text className="text-primary-whiteCardBg text-3xl font-bold mt-10 mb-5">
          Estadísticas
        </Text>
        <MainCard>
          <Text className="text-start text-primary-black text-2xl font-semibold">
            Mis Partidos
          </Text>
        </MainCard>
      </View>
    </View>
  );
}
