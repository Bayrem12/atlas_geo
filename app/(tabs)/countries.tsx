import { countries } from '@/constants/countries';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    Modal,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function CountriesPage() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleNavigateHome = () => {
    setDrawerVisible(false);
    router.replace('/');
  };

  const handleNavigateAbout = () => {
    setDrawerVisible(false);
    router.push('/about');
  };

  const handleQuit = () => {
    setDrawerVisible(false);
    if (Platform.OS === 'web') {
      Alert.alert('Quitter', 'Fermez cet onglet pour quitter l\'application');
    } else {
      Alert.alert(
        'Quitter',
        'Voulez-vous vraiment quitter l\'application ?',
        [
          { text: 'Annuler', style: 'cancel' },
          { text: 'Quitter', onPress: () => {} },
        ]
      );
    }
  };

  const renderCountryItem = ({ item }: { item: typeof countries[0] }) => (
    <Pressable
      style={({ pressed }) => [
        styles.listItem,
        pressed && styles.listItemPressed,
      ]}
      onPress={() => {
        router.push(`/country/${item.id}`);
      }}
    >
      <Text style={styles.flag}>{item.flag}</Text>
      <Text style={styles.countryName}>{item.name}</Text>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header / AppBar */}
      <View style={styles.header}>
        <Pressable
          style={({ pressed }) => [
            styles.menuButton,
            pressed && styles.menuButtonPressed,
          ]}
          onPress={toggleDrawer}
        >
          <Ionicons name="menu" size={28} color="#fff" />
        </Pressable>
        <Text style={styles.headerTitle}>Liste des Pays</Text>
        <View style={styles.menuButton} />
      </View>

      {/* Countries List */}
      <FlatList
        data={countries}
        renderItem={renderCountryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Drawer Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={drawerVisible}
        onRequestClose={toggleDrawer}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={toggleDrawer}
        >
          <View
            style={styles.drawer}
            onStartShouldSetResponder={() => true}
          >
            {/* Drawer Header */}
            <View style={styles.drawerHeader}>
              <Ionicons name="globe" size={60} color="#4c6ef5" />
              <Text style={styles.drawerHeaderTitle}>Atlas Géographique</Text>
            </View>

            {/* Drawer Menu Items */}
            <View style={styles.drawerContent}>
              <Pressable
                style={({ pressed }) => [
                  styles.drawerItem,
                  pressed && styles.drawerItemPressed,
                ]}
                onPress={handleNavigateHome}
              >
                <Ionicons name="home" size={24} color="#4c6ef5" />
                <Text style={styles.drawerItemText}>Accueil</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.drawerItem,
                  pressed && styles.drawerItemPressed,
                ]}
                onPress={handleNavigateAbout}
              >
                <Ionicons name="information-circle" size={24} color="#4c6ef5" />
                <Text style={styles.drawerItemText}>À propos</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.drawerItem,
                  pressed && styles.drawerItemPressed,
                ]}
                onPress={handleQuit}
              >
                <Ionicons name="exit" size={24} color="#4c6ef5" />
                <Text style={styles.drawerItemText}>Quitter</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1a1d2e',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  menuButton: {
    padding: 8,
    width: 44,
    alignItems: 'center',
  },
  menuButtonPressed: {
    opacity: 0.6,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContent: {
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listItemPressed: {
    backgroundColor: '#f0f0f0',
  },
  flag: {
    fontSize: 32,
    marginRight: 16,
  },
  countryName: {
    flex: 1,
    fontSize: 17,
    fontWeight: '500',
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    width: '75%',
    height: '100%',
    backgroundColor: '#1a1d2e',
  },
  drawerHeader: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  drawerHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
  },
  drawerContent: {
    flex: 1,
    paddingTop: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2f45',
  },
  drawerItemPressed: {
    backgroundColor: '#252a42',
  },
  drawerItemText: {
    fontSize: 17,
    color: '#fff',
    marginLeft: 16,
    fontWeight: '500',
  },
});
