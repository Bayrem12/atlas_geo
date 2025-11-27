import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const handleExplore = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Atlas Géographique</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('@/assets/images/globe.png')} 
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.welcomeText}>Découvrez les pays du monde</Text>

        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={handleExplore}
        >
          <Text style={styles.buttonText}>Explorer</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1d2e',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#1a1d2e',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 60,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#4c6ef5',
    paddingHorizontal: 80,
    paddingVertical: 16,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#3b5bdb',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});
