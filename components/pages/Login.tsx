import { View } from "react-native";
import { Header, Label } from "../pieces";
import { Card, CardTitle, Button, Text } from "../ui";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
export function Login() {
  const navigator = useNavigation<
    StackNavigationProp<
      {
        Login: undefined;
        NewUser: undefined;
      }
    >
  >();
  return (
    <View className="flex-1 justify-center items-center">
      <Header />
      <Card className="w-[90%] h-[50%] p-[15px] flex flex-col justify-around">
        <CardTitle className="text-center">Entrar</CardTitle>
        <Label Type="email-address" Label="Email:" Placeholder="Email" />
        <Label Type="default" Label="Senha:" Placeholder="Senha" />
        <Button>
          <Text>Entrar</Text>
        </Button>
        <Button
          variant="link"
          onPress={() => {
            navigator.navigate("NewUser");
          }}
        >
          <Text className="underline">Criar conta</Text>
        </Button>
      </Card>
    </View>
  );
}
