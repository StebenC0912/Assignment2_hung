import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CategoryButton(props) {
  const { color, category, onPress } = props;
  return (
    <TouchableOpacity
      style={StyleSheet.create({
        flex: 1,
        color: color,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: color,
        paddingHorizontal: 10,
        paddingVertical: 40,
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 5,
      })}
      onPress= {onPress} 
    >
      <Text
        style={StyleSheet.create({
          color: "#fff",
          fontSize: 20,
        })}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );
}
