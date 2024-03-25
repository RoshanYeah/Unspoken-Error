import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NextPage from './screens/next_page';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const handleButtonClick = () => {
    navigation.navigate('NextPage');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/UnspokenLogo.png')} style={styles.logo} />
      <View style={styles.logoContainer}></View>
      
      <View style={styles.body}>
        <Text style={styles.h1}>Enter Your Alibi:</Text>
        <View style={styles.form}>
          <TextInput style={styles.inputText} placeholder="Enter your name" />
          <View style={styles.container}>
            <View style={styles.box}></View>
            <TouchableOpacity style={styles.button54} onPress={handleButtonClick}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.h6}>Created by Me</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NextPage" component={NextPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9', // Light background color
    paddingHorizontal: 10, // Add some horizontal padding
  },
  logoContainer: {
    flex: 0.01,
    justifyContent: 'center', // Center the image vertically
    alignItems: 'center',
  },
  logo: {
    flex: 0.2,
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 90,
    marginTop: 90,
    marginBottom: 0,
  },
  body: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 32, // Larger font size
    marginBottom: 20,
    fontWeight: 'bold', // Make the text bold
    color: '#FF6F61', // Cartoonish red color
    textAlign: 'center', // Center the text
  },
  form: {
    width: '100%', // Take up full width
    paddingHorizontal: 10, // Add some horizontal padding
    marginBottom: 50, // Add some bottom margin
  },
  inputText: {
    paddingVertical: 20, // Increase padding
    paddingHorizontal: 20, // Increase padding
    borderWidth: 2, // Thicker border
    borderColor: '#FF6F61', // Cartoonish red border color
    borderRadius: 25, // Rounder corners
    fontSize: 18, // Larger font size
    marginBottom: 20, // Add some bottom margin
  },
  button54: {
    fontSize: 24,
    letterSpacing: 1,
    textTransform: 'uppercase', // Convert text to uppercase
    color: '#FFF',
    backgroundColor: '#FF6F61',
    paddingVertical: 35,
    paddingHorizontal: 89,
    borderRadius: 25,
    elevation: 10, // Add some elevation for shadow
  },
  h6: {
    fontSize: 14,
    marginTop: 20, // Add some top margin
    color: '#888', // Lighter text color
    fontStyle: 'italic', // Make the text italic
  },
});

export default App;
