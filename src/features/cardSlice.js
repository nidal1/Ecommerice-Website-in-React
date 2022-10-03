import { createSlice } from "@reduxjs/toolkit";

const productItems = [
  {
    id: 1,
    discount: 50,
    cover: "./images/flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: 2,
    discount: 40,
    cover: "./images/flash/flash-2.png",
    name: "Watch",
    price: 20,
  },
  {
    id: 3,
    discount: 40,
    cover: "./images/flash/flash-3.png",
    name: "Smart Mobile Black",
    price: 200,
  },
  {
    id: 4,
    discount: 40,
    cover: "./images/flash/flash-4.png",
    name: "Smart Watch Black",
    price: 50,
  },
  {
    id: 5,
    discount: 50,
    cover: "./images/flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: 6,
    discount: 50,
    cover: "./images/flash/flash-3.png",
    name: "Shoes",
    price: 100,
  },
];
const initialState = {
  value: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productExit = state.value?.find(
        (item) => item.id === action.payload.id
      );
      if (productExit) {
        state.value = state.value.map((item) =>
          item.id === action.payload.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        );
      } else {
        state.value = [...state.value, { ...action.payload, qty: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter( i => i.id !== action.payload.id)
    },
    decreaseQty: (state, action) => {
      const productExit = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (productExit.qty === 1) {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.value = state.value.map((item) =>
          item.id === action.payload.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, decreaseQty, removeFromCart } = cardSlice.actions;
export { productItems };
export default cardSlice.reducer;
