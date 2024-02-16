import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Root from "./src/components/index";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      {/**
       * Added in a PersistGate as it is the reommended way to delay rendering until persistence is complete
       *  */}
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Root />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
