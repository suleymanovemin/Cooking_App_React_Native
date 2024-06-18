import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: "All Categories",
            }}
            name="MealsCategories"
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="MealsOverViewScreen"
            component={MealsOverViewScreen}
            // options={({ route,navigation }) => {
            //  const catId = route.params.categoryId;

            //  return {
            //   title: catId,
            //  }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
