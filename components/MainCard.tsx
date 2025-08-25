import { View } from "react-native";

type MainCardProps = {
  children: React.ReactNode;
};

export default function MainCard({ children }: MainCardProps) {
  return (
    <View className="bg-primary-whiteCardBg p-8 flex flex-col rounded-2xl border border-primary-grayDark items-center gap-2 min-w-40">
      {children}
    </View>
  );
}
