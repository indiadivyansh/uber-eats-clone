import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ScrollViewBase,
} from "react-native";
import { Divider } from "react-native-elements";

const foodItems = [
  {
    title: "Paneer Tikka",
    description: "A Famous Indian Vegetarian dish",
    price: "₹ 149",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",
  },
  {
    title: "Paneer Tikka",
    description: "A Famous Indian Vegetarian dish",
    price: "₹ 149",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",
  },
  {
    title: "Paneer Butter Masala",
    description: "A Famous Indian Vegetarian dish",
    price: "₹ 149",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vo7osaqlexopn5f5bsq1",
  },
  {
    title: "Paneer Tikka",
    description: "A Famous Indian Vegetarian dish",
    price: "₹ 53",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",
  },
  {
    title: "Paneer Tikka",
    description: "A Famous Indian Vegetarian dish",
    price: "₹ 53",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",
  },
  {
    title: "Paneer Tikka",
    description: "A Famous Indian Vegetarian dish",
    price: "₹ 53",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",
  },
  {
    title: "Paneer Tikka",
    description: "A Famous Indian Vegetarian dish",
    price: "₹ 53",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",
  },
];

export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foodItems.map((item, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={item} />
            <FoodImage food={item} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View
    style={{
      width: 240,
      justifyContent: "space-evenly",
    }}
  >
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 90, height: 90, borderRadius: 8 }}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
