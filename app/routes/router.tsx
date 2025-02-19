import Stacks, { Stack } from "./stack";
import { Login } from "~/components/pages/Login";
export default function Router() {
  const StackRouter: Stack[] = new Stacks({
    Name: "Login",
    Component: () => <Login />,
  }).GetRoutes();
  return (
    <Stacks.Stack.Navigator
      initialRouteName={StackRouter[0].Name}
      screenOptions={{ headerShown: false }}
    >
      {StackRouter.map((route, index) => {
        return (
          <Stacks.Stack.Screen
            key={index}
            name={route.Name}
            component={route.Component}
          />
        );
      })}
    </Stacks.Stack.Navigator>
  );
}
