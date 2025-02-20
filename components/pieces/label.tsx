import { KeyboardTypeOptions, View } from "react-native";
import { Text } from "../ui/text";
import { Input } from "~/components/ui/input";

export function Label({
  Type,
  Label,
  Placeholder,
}: {
  Type: KeyboardTypeOptions;
  Label: string;
  Placeholder: string;
}) {
  return (
    <View className=" flex-row items-center justify-center">
      <Text numberOfLines={1} className="text-lg text-center w-[70px] relative right-[10px]">{Label}</Text>
      <Input
        keyboardType={Type}
        placeholder={Placeholder}
        className="w-[225px] relative left-[10px]"
      />
  
    </View>
  );
}
