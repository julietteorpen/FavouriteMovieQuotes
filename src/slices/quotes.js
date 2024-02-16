import { createSlice } from "@reduxjs/toolkit";

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
  },
  reducers: {
    addQuote: (state, action) => {
      const quoteObj = action.payload;
      state.quotes.push(quoteObj);
      state.quotes.sort((a, b) => b.score - a.score);
    },
    deleteQuote: (state, action) => {
      const quoteToBeDeleted = action.payload;
      state.quotes = state.quotes.filter((qu) => qu.quote !== quoteToBeDeleted);
    },
  },
});

export const { addQuote, deleteQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
