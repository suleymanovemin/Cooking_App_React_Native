import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/MealDetail/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton color="red" icon="heart-outline" />;
      },
      title: meal.title,
    });
  }, [meal, navigation]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: meal.imageUrl }}
          style={{ width: "100%", height: 200 }}
        />
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetails
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listContainer}>
          <SubTitle> Ingredients</SubTitle>
          <List data={meal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "#888",
  },
  listContainer: {
    maxWidth: "85%",
    marginVertical: 0,
    marginHorizontal: "auto",
    marginBottom: 26,
  },
});
