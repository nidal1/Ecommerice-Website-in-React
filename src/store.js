import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './features/shopSlice'
import cardReducer from './features/cardSlice'
export const store = configureStore({
  reducer:{
    shopItems: shopReducer,
    cardItems: cardReducer
  },
})