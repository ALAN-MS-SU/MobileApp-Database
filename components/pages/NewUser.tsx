import { View } from "react-native";
import { Header, Label } from "../pieces";
import { Card, CardTitle, Button, Text } from "../ui";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
export function NewUser() {
  const navigator =
    useNavigation<
      StackNavigationProp<{ Login: undefined; NewUser: undefined }>
    >();
  return (
    <View className="flex-1 justify-center items-center">
      <Header />
      <Card className="w-[90%] h-[50%] p-[15px] flex flex-col justify-around">
        <CardTitle className="text-center">Criar nova conta</CardTitle>
        <Label Type="email-address" Label="Email:" Placeholder="Email" />
        <Label Type="default" Label="Senha:" Placeholder="Senha" />
        <Button>
          <Text>Entrar</Text>
        </Button>
        <Button
          variant="link"
          onPress={() => {
            navigator.navigate("Login");
          }}
        >
          <Text className="underline">Entrar com uma conta</Text>
        </Button>
      </Card>
    </View>
  );
}
