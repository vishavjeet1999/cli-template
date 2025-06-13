/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {useEffect} from 'react'
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import CallDetector from "react-native-scizers-call-detector"

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(()=>{
    // checkPhoneState()
    // console.log(CallDetector,"test......")
  },[])

  // const checkPhoneState = ()=>{
  //   let state = CallDetector.CheckPhoneState((state)=>{
  //     console.log(state,"state here............")
  //   })
  // }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
