import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { EvilIcons } from "@expo/vector-icons";
import { deleteQuote } from "../slices/quotes";

// Component to display an individual quote
const QuoteCard = ({ quote, score, rank }) => {
  const dispatch = useDispatch();
  console.log(16, "quote,score", quote, score);
  return (
    <View style={styles.card}>
      <Text>{rank}</Text>
      <Text>{quote}</Text>
      <Text>{score}</Text>

      <TouchableOpacity onPress={() => dispatch(deleteQuote(quote))}>
        <EvilIcons name="trash" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

// Component to render a list of QuoteCards
const QuotesList = () => {
  const { quotes } = useSelector((state) => state.quotes);
  console.log(30, "quotes", quotes);
  return (
    <FlatList
      data={quotes}
      contentContainerStyle={{ alignItems: "center" }}
      ListHeaderComponent={() => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "80%",
            paddingBottom: 10,
            paddingRight: "20%",
          }}
        >
          <Text>Rank</Text>
          <Text>Quote</Text>
          <Text>Score</Text>
        </View>
      )}
      renderItem={({ index, item }) => {
        console.log(23, "item", item.quote);
        return (
          <QuoteCard quote={item.quote} score={item.score} rank={index + 1} />
        );
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
    width: "80%",
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export { QuoteCard, QuotesList };
