import React from "react";
import { View, Text, Image } from "react-native";

const image =
  "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg";

const title = "Dummy Restaurant Name";
const description = "Thai | Comfort | $$$ | 4(2913+)";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  return (
    <View>
      {/* Restaurant Image */}
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
      {/* Title */}
      {/* Description */}
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{
      width: "100%",
      height: 180,
    }}
  />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
