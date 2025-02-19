import { createNativeStackNavigator } from "@react-navigation/native-stack";
export interface Stack {
  Name: string;
  Component: ()=>React.JSX.Element;
}
export default class Stacks {
  public static Stack = createNativeStackNavigator();
  private Routes: Stack[] = [];
  constructor(...routes: Stack[]) {
    this.Routes.push(...routes);
  }
  public GetRoutes(): Stack[] {
    return this.Routes;
  }
}
