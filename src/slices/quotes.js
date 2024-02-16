import { createSlice } from "@reduxjs/toolkit";

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
  },
  reducers: {
    addQuote: (state, action) => {
      const quoteObj = { quote: action.payload };
      console.log(12, "newQuote", quoteObj);
      state.quotes.push(quoteObj);
    },
  },
});

export const { addQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
