import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const TldrawScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <WebView
        source={{ uri: "https://tldraw.com" }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
        allowsFullscreenVideo
        allowsBackForwardNavigationGestures
        startInLoadingState
      />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <TldrawScreen />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Optional: Set background to white for better contrast
  },
  webview: {
    flex: 1,
  },
});

export default App;
