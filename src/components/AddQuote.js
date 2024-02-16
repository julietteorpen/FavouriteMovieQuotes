import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { addQuote } from "../slices/quotes";

const AddQuote = ({ quotesList, setUpdateQuotes }) => {
  const dispatch = useDispatch();
  const [quoteText, setQuoteText] = useState("");

  const handleAddQuote = () => {
    // Here you can implement the logic to add the quote to your data store
    console.log("Adding quote:", quoteText);
    // Reset the input field after adding the quote
    dispatch(addQuote(quoteText));
    setQuoteText("");
  };

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={(text) => setQuoteText(text)}
        value={quoteText}
        placeholder="Enter your quote"
      />
      <Button
        title="Add"
        onPress={handleAddQuote}
        disabled={!quoteText} // Disable the button if input is empty
      />
    </View>
  );
};

export default AddQuote;
