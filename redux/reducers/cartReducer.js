const { createSlice } = require("@reduxjs/toolkit");

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    selectedItems: {
      items: [],
      restaurantName: "",
    },
  },
  reducers: {
    addToCart(state, action) {
      const { item, restaurantName, checkboxValue } = action.payload;
      if (checkboxValue) {
        console.log("ADD TO CART");
        state.selectedItems.restaurantName = restaurantName;
        state.selectedItems.items = [...state.selectedItems.items, item];

        console.log("Items => ", state.selectedItems);
      } else {
        console.log("REMOVE FROM CART");
        state.selectedItems.items = [
          ...state.selectedItems.items.filter((IT) => IT.title !== item.title),
        ];
        state.selectedItems.restaurantName = restaurantName;
        console.log("Items => ", state.selectedItems);
      }
    },
  },
});

export const { addToCart } = cardSlice.actions;

export default cardSlice.reducer;
