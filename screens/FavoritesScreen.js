import { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

export default function FavoritesScreen({ navigation }) {
  const favoritesMealsIDS = useContext(FavoritesContext).ids;
  const favoritesMeals = MEALS.filter((meal) =>
    favoritesMealsIDS.includes(meal.id)
  );
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        onPress={() =>
          navigation.navigate("MealDetail", { mealId: itemData.item.id })
        }
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };
  return (
    <View>
      {favoritesMeals.length === 0 ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            You have no favorite meals yet. Start adding some!
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable
              android_ripple={{ color: "#ccc" }}
              style={({ pressed }) => [
                styles.button,
                { opacity: pressed ? 0.75 : 1 },
              ]}
              onPress={() => navigation.navigate("Categories")}
            >
              <Text style={styles.innerText}>Show all meals</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={favoritesMeals}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#e2b497",
    margin: 8,
    overflow: "hidden",
  },
  innerText: {
    color: "#351401",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
});
