import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const driverRegister2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the driver registration page.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
},
});

export default driverRegister2;