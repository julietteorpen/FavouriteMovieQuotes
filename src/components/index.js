import React, { useState } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import AddQuote from "./AddQuote";
import { QuotesList } from "./QuotesList";

const Root = () => {
  return (
    <View>
      <AddQuote />
      <QuotesList />
    </View>
  );
};

export default Root;
