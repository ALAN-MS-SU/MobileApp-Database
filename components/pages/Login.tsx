import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { ThemeToggle } from "../ThemeToggle";

export function Login() {
  return (
    <View className=" flex-1 flex flex-col items-center justify-center">
      <ThemeToggle />
      <Text>SURGE</Text>
    </View>
  );
}
