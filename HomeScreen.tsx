import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }: any) => {  return (
    <View style={styles.container}>
      <Text style={styles.logo}>argon</Text>

      <Text style={styles.title}>Design System</Text>
      <Text style={styles.subtitle}>
        Fully coded React Native components
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateAccount')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#6a11cb', // gradient approx
  },
  logo: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#eee',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 40,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
