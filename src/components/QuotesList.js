import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { UseDispatch, useSelector } from "react-redux";

// Component to display an individual quote
const QuoteCard = ({ quote }) => {
  return <View style={styles.card}>{<Text>{quote}</Text>}</View>;
};

// Component to render a list of QuoteCards
const QuotesList = () => {
  const { quotes } = useSelector((state) => state.quotes);
  console.log(18, "quotesList", quotes);
  return (
    <FlatList
      data={quotes}
      renderItem={({ item }) => {
        console.log(23, "item", item.quote);
        return <QuoteCard quote={item.quote} />;
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export { QuoteCard, QuotesList };
