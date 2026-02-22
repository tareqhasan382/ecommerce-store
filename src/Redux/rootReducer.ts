import baseApi from "./api/baseApi";
import cardSlice from "./cardSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
   cart: cardSlice,
};