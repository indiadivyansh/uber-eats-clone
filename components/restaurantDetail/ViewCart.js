import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart({}) {
  const items = useSelector((state) => state.cart.selectedItems.items);
  let total = items
    .map((item) => Number(item.price.replace("₹ ", "")))
    .reduce((prev, curr) => prev + curr, 0);
  // let totalINR = total.ToString.=toLocalString("en", {
  //   style: "currency",
  //   currency: "INR",
  // });
  let totalINR = "₹ " + total;
  console.log(totalINR);
  return (
    <>
      {total ? (
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
                padding: 15,
                width: 300,
                position: "relative",
                borderRadius: 30,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 40 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalINR}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
