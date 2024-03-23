import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import FavoriteMealItem from "../components/FavoriteMealItem";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/Meals";

export default function FavoriteScreen(props) {
  const FavoriteMEALS = useSelector((state) => state.meals.favoriteMeals);
  const FavoriteMealList = FavoriteMEALS;
  const dispatch = useDispatch();
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };

  const navigateDetails = (id) => {
    // navigate to the meal detail screen
    console.log("Meal clicked", id);
    props.navigation.navigate("MealDetail", {
      mealId: id,
      category: null,
      categoryId: null,
    });
  };

  const renderFavoriteMealList = () => {
    return (
      <FlatList
        style={{
          width: "100%",
          borderRadius: 16,
        }}
        data={FavoriteMealList}
        renderItem={({ item }) => (
          <FavoriteMealItem
            image={item.imageUrl}
            time={item.duration}
            name={item.title}
            complexity={item.complexity}
            category={getCategoryById(item.categoryIds)}
            onPress={() => toggleFavoriteHandler(item.id)}
            onPressItem={() => navigateDetails(item.id)}
          />
        )}
        scrollEnabled={false}
      />
    );
  };

  // Function to get category by ID
  const getCategoryById = (categoryIds) => {
    // return array of categories
    // log the finding result
    const mealCategories = [];
    categoryIds.forEach((categoryId) => {
      const category = CATEGORIES.find((cat) => cat.id === categoryId);
      if (category) {
        mealCategories.push(category.title);
      }
    });
    return mealCategories;
  };

  const renderNoFavoriteMeals = () => {
    return (
      <View
        style={StyleSheet.create({
          marginTop: 60,
        })}
      >
        <Image source={require("../assets/empty.jpg")} />
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignContent: "space-between",
          alignItems: "center",
          borderRadius: 20,
          backgroundColor: "white",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#5ED240",
            paddingTop: 20,
            fontSize: 22,
            fontWeight: "semibold",
            marginVertical: 50,
          }}
        >
          Favorite Meal
        </Text>

        {FavoriteMealList.length === 0
          ? renderNoFavoriteMeals()
          : renderFavoriteMealList()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
    flexGrow: 1,
  },
  headerImage: {
    width: "100%",
    height: 357,
  },
});
