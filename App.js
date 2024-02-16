import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './App/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigatior from './App/Navigation/HomeNavigatior';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <NavigationContainer>
       <HomeNavigatior/>
     </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:30
  },
});
