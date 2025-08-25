import { View } from "react-native";

type MainCardProps = {
  children: React.ReactNode;
};

export default function MainCard({ children }: MainCardProps) {
  return (
    <View className="bg-primary-whiteCardBg p-10 flex flex-col rounded-2xl border border-primary-grayDark ">
      {children}
    </View>
  );
}
