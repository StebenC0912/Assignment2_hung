import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Pressable,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MEALS } from "../data/dummy-data";
import { useSelector, useDispatch } from "react-redux";
export default function MealDetail(props) {
  const FavoriteMealItem = useSelector((state) => state.meals.favoriteMeals);
  const dispatch = useDispatch();
  const changeStatus = (mealId) => {
    dispatch({ type: "TOGGLE_FAVORITE", mealId: mealId });
  };
  const onFavorite = () => {
    changeStatus(mealId);
  };
  const renderButtonFavorite = () => {
    return (
      <Pressable onPress={onFavorite}>
        <Ionicons name="heart-outline" size={24} color="black" />
      </Pressable>
    );
  };
  const renderRemove = () => {
    return (
      <Pressable onPress={onFavorite}>
        <Ionicons name="heart" size={24} color="red" />
      </Pressable>
    );
  };
  const { mealId, category, categoryId } = props.route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const attribute = [];
  if (meal.isGlutenFree) {
    attribute.push("Gluten Free");
  }
  if (meal.isVegan) {
    attribute.push("Vegan");
  }
  if (meal.isVegetarian) {
    attribute.push("Vegetarian");
  }
  if (meal.isLactoseFree) {
    attribute.push("Lactose Free");
  }
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateDimensions = () => {
      setScreenHeight(Dimensions.get("window").height);
      setScreenWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", updateDimensions);
    return () => {};
  }, []);

  return (
    <ScrollView
      style={StyleSheet.create({
        backgroundColor: "white",
      })}
    >
      <View
        style={StyleSheet.create({
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 50,
          marginBottom: 10,
        })}
      >
        <Pressable
          style={StyleSheet.create({
            marginLeft: 10,
          })}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#5ED240" />
        </Pressable>
        <Text
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 20,
            fontWeight: "400",
          }}
        > 
          {screenWidth < 500 && meal.title.length > 30 ? meal.title.substring(0, 25) + "..." : meal.title}
        </Text>
        <View
          style={StyleSheet.create({
            width: 24,
            marginRight: 10,
            
          })}
        >
          {FavoriteMealItem.some((meal) => meal.id === mealId)
            ? renderRemove()
            : renderButtonFavorite()}
        </View>
      </View>
      <View>
        <ImageBackground
          source={{
            uri: meal.imageUrl,
          }}
          style={[
            styles.headerImage,
            { height: screenWidth > screenHeight ? 250 : 357 },
          ]}
        ></ImageBackground>
      </View>

      <FlatList
        data={attribute}
        renderItem={({ item }) => (
          <View
            style={StyleSheet.create({
              backgroundColor: "#D7D7D7",
              width: "30%",
              marginHorizontal: 5,
              borderRadius: 16,
              marginVertical: 5,
            })}
          >
            <Text style={{ textAlign: "center", fontWeight: "500" }}>
              {item}
            </Text>
          </View>
        )}
        style={StyleSheet.create({
          width: "100%",
          marginBottom: 10,
          paddingHorizontal: 10,
          backgroundColor: "#D7D7D7",
        })}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
      <View
        style={StyleSheet.create({
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        })}
      >
        <Ionicons name="hourglass-outline" size={30} color="#5ED240" />
        <Text style={styles.text}>{meal.duration} mins</Text>
      </View>
      <Text style={styles.textHeader}>
        {meal.ingredients.length} Ingredients
      </Text>
      {meal.ingredients.map((ingredient, index) => (
        <Text
          key={index}
          style={StyleSheet.create({
            textAlign: "center",
            fontSize: 14,
            padding: 7,
            color: "#393939",
          })}
        >
          {ingredient}
        </Text>
      ))}
      <Text style={styles.textHeader}>Steps</Text>
      <FlatList
        data={meal.steps}
        renderItem={({ item, index }) => (
          <View
            style={StyleSheet.create({
              marginHorizontal: 10,
              marginVertical: 25,
            })}
          >
            <Text
              style={StyleSheet.create({
                color: "#393939",
                fontSize: 14,
              })}
            >
              {index + 1}. {item}
            </Text>
          </View>
        )}
        scrollEnabled={false}
      />
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
    flexDirection: "column",
    justifyContent: "space-between",
    resizeMode: "contain",
  },
  textHeader: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
    fontWeight: "500",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#393939",
  },
});
