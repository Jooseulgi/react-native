import { FlatList, ScrollView, StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useState } from "react";

export default function TabTwoScreen() {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 80 }}>안녕하세요</Text>
      <Text style={{ fontSize: 80 }}>안녕하세요</Text>
      <Text style={{ fontSize: 80 }}>안녕하세요</Text>
      <Text style={{ fontSize: 80 }}>안녕하세요</Text>
      <Text style={{ fontSize: 80 }}>안녕하세요</Text>
      {/* <Text style={styles.title}>탭탭</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="눌러보세요"
        onChangeText={(newText) => setValue(newText)}
        defaultValue={value}
      />
      <Text>{value}</Text>
      <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
