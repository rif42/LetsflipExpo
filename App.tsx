import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type Names = [
  string,
  number
]

function greet(name: Names):string {
  let greeting:string = "";
    for (let i=0; i<name.length; i++) {
        greeting += "hello " + name[i] + "\n";
    }
    return greeting;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{greet(["him", 3])}</Text>
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
  },
});
