import React, { useState } from "react";
import { View, TextInput, Button, Text, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./AddQuoteStyles";
import { addQuote } from "../slices/quotes";

const AddQuote = () => {
  const dispatch = useDispatch();
  const [quoteText, setQuoteText] = useState("");
  const [score, setScore] = useState("");
  const screenWidth = Dimensions.get("window").width;

  const handleAddQuote = () => {
    dispatch(addQuote({ quote: quoteText, score: Number(score) }));
    // Reset the input fields after adding the quote
    setQuoteText("");
    setScore("");
  };

  return (
    <View style={{ ...styles.container, width: screenWidth }}>
      <Text style={styles.header}>World's best movie quotes!</Text>
      <Text style={styles.subheader}>
        Add and rank your favourite movie quotes
      </Text>

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
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={(text) => {
          // Ensure that the input is a number between 0 and 100
          const num = parseInt(text);
          if (!isNaN(num) && num >= 0 && num <= 100) {
            setScore(num.toString());
          }
        }}
        value={score}
        placeholder="Enter score "
        keyboardType="numeric" // Set keyboard type to numeric
      />
      <Button
        title="Add"
        onPress={handleAddQuote}
        disabled={!quoteText || !score} // Disable the button if input is empty
      />
    </View>
  );
};

export default AddQuote;
