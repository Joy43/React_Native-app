import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center mx-auto justify-center ">
      <Text>Open up App.</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "blue" }}>
        home
      </Link>
    </View>
  );
}
