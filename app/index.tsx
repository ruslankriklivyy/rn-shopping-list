import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HeaderRight } from "@/components/UI/HeaderRight";
import WithAuthContext from "@/components/hoc/WithAuthContext";
import WithFonts from "@/components/hoc/WithFonts";
import linking from "@/config/linking";
import HomeScreen from "@/screens";
import LoginScreen from "@/screens/auth/login";
import RegisterScreen from "@/screens/auth/register";
import ListScreen from "@/screens/list";
import { RouteParam } from "@/types/general/RouteParam";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <WithFonts>
      <NavigationContainer independent linking={linking}>
        <WithAuthContext>
          <Stack.Navigator
            screenOptions={{
              headerRight: HeaderRight,
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "My Lists" }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="List"
              component={ListScreen}
              options={({ route }) => ({
                title: (route.params as RouteParam)?.title,
              })}
            />
          </Stack.Navigator>
        </WithAuthContext>
      </NavigationContainer>
    </WithFonts>
  );
}
