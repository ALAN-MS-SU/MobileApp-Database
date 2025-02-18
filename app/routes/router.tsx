import { Stack, Stacks } from "./stack";
import { Login } from "~/components/pages/Login";
export function Router() {
  const StackRouter:Stack[] = new Stacks({
    Name: "Login",
    Component: <Login />,
  }).GetRoutes();
  return (
    <Stacks.Stack.Navigator
      initialRouteName={StackRouter[0].Name}
      screenOptions={{ headerShown: false }}
    >
      {StackRouter.map((route) => {
        return (
          <Stacks.Stack.Screen
            name={route.Name}
            component={() => route.Component}
          />
        );
      })}
    </Stacks.Stack.Navigator>
  );
}
