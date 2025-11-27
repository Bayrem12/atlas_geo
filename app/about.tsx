import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutPage() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'À propos',
          headerShown: true,
          headerStyle: { backgroundColor: '#1a1d2e' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerBackVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={{ paddingHorizontal: 8 }}>
              <Ionicons name="chevron-back" size={26} color="#fff" />
            </Pressable>
          ),
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Ionicons name="information-circle" size={80} color="#4c6ef5" />
          </View>
          
          <Text style={styles.title}>Atlas Géographique</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>À propos de l'application</Text>
            <Text style={styles.text}>
              Atlas Géographique est une application mobile permettant de découvrir 
              les informations détaillées sur différents pays du monde.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Fonctionnalités</Text>
            <Text style={styles.text}>• Consultation de la liste des pays</Text>
            <Text style={styles.text}>• Informations détaillées par pays</Text>
            <Text style={styles.text}>• Interface intuitive et moderne</Text>
            <Text style={styles.text}>• Navigation fluide</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Développeur</Text>
            <Text style={styles.text}>Bayrem Akka</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technologies</Text>
            <Text style={styles.text}>• React Native</Text>
            <Text style={styles.text}>• Expo</Text>
            <Text style={styles.text}>• TypeScript</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1d2e',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  version: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
    backgroundColor: '#252a42',
    padding: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4c6ef5',
    marginBottom: 12,
  },
  text: {
    fontSize: 15,
    color: '#ddd',
    lineHeight: 24,
    marginBottom: 4,
  },
});
