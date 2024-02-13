import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const AddQuote = ({ quotesList, setUpdateQuotes }) => {
  const [quoteText, setQuoteText] = useState("");
  console.log(8, "updateQuotes", quotesList);

  const handleAddQuote = () => {
    // Here you can implement the logic to add the quote to your data store
    console.log("Adding quote:", quoteText);
    // Reset the input field after adding the quote
    const pushToQuoteArray = quotesList;
    pushToQuoteArray.push(quoteText);
    console.log(18, "pushToQuoteArray", pushToQuoteArray);
    setUpdateQuotes(pushToQuoteArray);
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
