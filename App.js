import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Root from "./src/components/index";
import { Provider } from "react-redux";
import { reduxStore } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={reduxStore}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Root />
      </View>
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
