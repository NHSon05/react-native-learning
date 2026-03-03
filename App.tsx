import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [count, setCount] = useState<number>(0)

  return (
    <View style={styles.container}>
        <View>
          <Text>{count} hello world</Text>
        </View>
        <Button
          title='Increase'
          onPress={() => alert("tap me")}
        />
        <Button
          color={"red"}
          title='Increase'
          onPress={() => setCount(count + 1)}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
