import Stacks, { Stack } from "./stack";
import { Login, NewUser } from "~/components/pages";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
export default function Router() {
  const StackRouter: Stack[] = new Stacks(
    {
      Name: "Login",
      Component: () => <Login />,
    },
    {
      Name: "NewUser",
      Component: () => <NewUser />,
    }
  ).GetRoutes();
  
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

