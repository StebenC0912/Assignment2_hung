import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function MealListItem(props) {
  const {
    image,
    time,
    name,
    complexity,
    category,
    onPress,
    onFavorite,
    isFavorite,
  } = props;
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
        <Ionicons name="heart" size={24} color="#FF0C0C" />
      </Pressable>
    );
  };
  return (
    <View
      style={StyleSheet.create({
        flex: 1,
        flexDirection: "column",
        borderRadius: 8,
        alignContent: "center",
        justifyContent: "center",
        borderWidth: 1,
        marginHorizontal: 16,
        marginVertical: 8,
      })}
    >
      <TouchableOpacity
        style={StyleSheet.create({
          flex: 1,
          width: "100%",
        })}
        onPress={onPress}
      >
        <Image
          source={{ uri: image }}
          style={{
            resizeMode: "stretch",
            height: 290,
            width: "100%",
            alignSelf: "center",
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
        />
        <View
          style={StyleSheet.create({
            padding: 10,
            backgroundColor: "white",
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
            width: "100%",
          })}
        >
          <View
            style={StyleSheet.create({
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
              width: "100%",
            })}
          >
            <Text
              style={StyleSheet.create({
                flex: 1,
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
              })}
            >
              {name}
            </Text>
            {isFavorite ? renderRemove() : renderButtonFavorite()}
          </View>
          <View
            style={StyleSheet.create({
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              marginBottom: 10,
            })}
          >
            <Ionicons
              name="time-outline"
              size={24}
              color="black"
              style={StyleSheet.create({
                marginRight: 10,
              })}
            />

            <Text style={styles.textDetail}>{time} mins</Text>
            <Text style={styles.textDetail}>{complexity}</Text>
            <Text style={styles.textDetail}>
              {category.join(", ").length > 20
                ? `${category.join(", ").substring(0, 20)}...`
                : category.join(", ")}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textDetail: {
    color: "black",
    fontSize: 14,
    marginRight: 10,
    fontWeight: "400",
  },
});
