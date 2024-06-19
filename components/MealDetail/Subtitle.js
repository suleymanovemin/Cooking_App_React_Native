import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomColor: "#888",
    marginHorizontal: 12,
    marginVertical: 8,
    borderBottomWidth: 2,
  },
  subTitle: {
    color: "#888",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
