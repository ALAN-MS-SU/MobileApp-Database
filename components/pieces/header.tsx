import { Card } from "../ui/card";
import { View } from "react-native";
import { ThemeToggle } from "../ThemeToggle";
import { Text } from "~/components/ui/text";
export function Header() {
  return (
    <Card className="w-full h-[100px] flex-row justify-between items-center">
      <Text className="pl-10">Bem vindo</Text>
      <View className="pr-10">
        <ThemeToggle />
      </View>
    </Card>
  );
}
