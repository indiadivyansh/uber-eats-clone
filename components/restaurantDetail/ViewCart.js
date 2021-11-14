import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart({}) {
  const items = useSelector((state) => state.cart.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("₹ ", "")))
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 350,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "black",
            alignItems: "center",
            padding: 13,
            width: 300,
            position: "relative",
            borderRadius: 30,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View>
    //     <Text>Hello</Text>
    // </View>
  );
}

const styles = StyleSheet.create({});
