import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import CategoryButton from "../components/CategoryButton";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
export default function FirstScreen(props) {
  
  const data = CATEGORIES;
  const handleCategoryClick = (categoryId, category) => {
    // navigate to the category screen
    props.navigation.navigate("FilterMealByCategoryScreen", { categoryId: categoryId, category });
  };
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View
          style={StyleSheet.create({
            flex: 1,
            width: "100%",
            alignContent: "center",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: "white",
          })}
        >
          <Text
            style={StyleSheet.create({
              paddingTop: 20,
              fontSize: 22,
              fontWeight: "semibold",
              color: "#5ED240",
              marginVertical: 50,
            })}
          >
            Category
          </Text>
          <FlatList
            style={StyleSheet.create({
              width: "100%",
            })}
            data={data}
            renderItem={({ item }) => (
              <CategoryButton
                category={item.title}
                color={item.color}
                onPress={() => handleCategoryClick(item.id, item.title)}
              />
            )}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: "100%",
    height: 357,
  },
});
