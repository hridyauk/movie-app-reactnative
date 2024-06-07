import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStack from "./src/components/stacks/AppStack";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        {/* <Text textAlign="center">Movie App</Text> */}
        <AppStack />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
