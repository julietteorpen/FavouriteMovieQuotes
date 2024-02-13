import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// Component to display an individual quote
const QuoteCard = ({ quote }) => {
  console.log(6, "quote", quote);
  return (
    <View style={styles.card}>
      <Text>{quote}</Text>
    </View>
  );
};

// Component to render a list of QuoteCards
const QuotesList = ({ quotes }) => {
  console.log(15, "quotes", quotes);
  return (
    <FlatList
      data={quotes}
      renderItem={({ item }) => <QuoteCard quote={item} />}
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
