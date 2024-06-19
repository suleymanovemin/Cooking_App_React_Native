import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({ duration, complexity, affordability, textStyle }) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
  },
});
