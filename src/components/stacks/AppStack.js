import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShowScreen from "../screens/ShowScreen";
import ShowDetailScreen from "../screens/ShowDetailScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={{
          title: "Movie App",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="ShowDetail"
        component={ShowDetailScreen}
        options={({ route }) => ({
          title: route.params.item.title || route.params.item.name,
          headerBackTitle: "Back to List",
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
