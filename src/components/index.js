import React, { useState } from "react";
import { View } from "react-native";
import AddQuote from "./AddQuote"; // Importing the AddQuote component
import { QuotesList } from "./QuotesList";

const Root = () => {
  const [updateQuotes, setUpdateQuotes] = useState([]);
  console.log(3338, "updateQuotes", updateQuotes);
  return (
    <View>
      <AddQuote quotesList={updateQuotes} setUpdateQuotes={setUpdateQuotes} />
      <QuotesList quotes={updateQuotes} />
    </View>
  );
};

export default Root;
