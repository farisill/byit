import { View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native'
import React from 'react'
import { Link }  from 'expo-router'

import exploreCoffeeImg from "@/assets/images/explore-coffee.png"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={exploreCoffeeImg}
      resizeMode="cover"
      style={styles.image}
      >
      <Text style={styles.title}>Contact Us</Text>

      <Link style={{ marginHorizontal: 'auto'}} href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back Home</Text>
        </Pressable>
      </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height:'100%',
    flex: 1,
    resizeMode:'cover',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  
})