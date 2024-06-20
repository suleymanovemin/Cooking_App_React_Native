import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Your Favorites",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="heart" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                title: "All Categories",
                headerShown: false,
              }}
              name="Drawer"
              component={DrawerNavigator}
            />
            <Stack.Screen
              name="MealsOverViewScreen"
              component={MealsOverViewScreen}
            />
            <Stack.Screen
              options={{ contentStyle: { backgroundColor: "#fdf2e9" } }}
              name="MealDetail"
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
