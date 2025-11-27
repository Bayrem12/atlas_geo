import { countries } from '@/constants/countries';
import { Ionicons } from '@expo/vector-icons';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CountryDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const country = countries.find(c => c.id === id);

  if (!country) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Pays non trouvé</Text>
      </View>
    );
  }

  // Format population (in millions)
  const populationInMillions = (country.population / 1000000).toFixed(1);
  
  // Format area with spaces for thousands
  const formattedArea = country.area.toLocaleString('fr-FR');

  return (
    <>
      <Stack.Screen 
        options={{
          title: country.name,
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
          {/* Flag Section */}
          <View style={styles.flagContainer}>
            {country.flagImage ? (
              <Image 
                source={country.flagImage} 
                style={styles.flagImage}
                resizeMode="contain"
              />
            ) : (
              <Text style={styles.flagLarge}>{country.flag}</Text>
            )}
          </View>

          {/* Country Name */}
          <Text style={styles.countryName}>{country.name}</Text>
          <Text style={styles.region}>{country.region}</Text>

          {/* Information Cards */}
          <View style={styles.infoSection}>
            
            {/* Capital */}
            <View style={styles.infoCard}>
              <View style={styles.infoHeader}>
                <Ionicons name="location" size={24} color="#4c6ef5" />
                <Text style={styles.infoLabel}>Capitale</Text>
              </View>
              <Text style={styles.infoValue}>{country.capital}</Text>
            </View>

            {/* Population */}
            <View style={styles.infoCard}>
              <View style={styles.infoHeader}>
                <Ionicons name="people" size={24} color="#4c6ef5" />
                <Text style={styles.infoLabel}>Population</Text>
              </View>
              <Text style={styles.infoValue}>
                {populationInMillions} millions d'habitants
              </Text>
            </View>

            {/* Area */}
            <View style={styles.infoCard}>
              <View style={styles.infoHeader}>
                <Ionicons name="map" size={24} color="#4c6ef5" />
                <Text style={styles.infoLabel}>Superficie</Text>
              </View>
              <Text style={styles.infoValue}>{formattedArea} km²</Text>
            </View>

            {/* Language */}
            <View style={styles.infoCard}>
              <View style={styles.infoHeader}>
                <Ionicons name="language" size={24} color="#4c6ef5" />
                <Text style={styles.infoLabel}>Langue(s) officielle(s)</Text>
              </View>
              <Text style={styles.infoValue}>{country.language}</Text>
            </View>

            {/* Currency (bonus info) */}
            <View style={styles.infoCard}>
              <View style={styles.infoHeader}>
                <Ionicons name="cash" size={24} color="#4c6ef5" />
                <Text style={styles.infoLabel}>Monnaie</Text>
              </View>
              <Text style={styles.infoValue}>{country.currency}</Text>
            </View>

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
  flagContainer: {
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: '#252a42',
    borderRadius: 20,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  flagLarge: {
    fontSize: 120,
  },
  flagImage: {
    width: 250,
    height: 180,
  },
  countryName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  region: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginBottom: 30,
  },
  errorText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
  infoSection: {
    gap: 16,
  },
  infoCard: {
    backgroundColor: '#252a42',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
    marginLeft: 12,
  },
  infoValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 36,
  },
});
