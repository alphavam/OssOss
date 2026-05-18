import { activities } from '@/constants/data';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const popular = ['Dubai', 'Paris', 'Bali', 'Tokyo', 'New York', 'London', 'Rome', 'Maldives'];

export default function SearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const filtered = activities.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.city.toLowerCase().includes(query.toLowerCase()) ||
    a.country.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search activities, cities, countries..."
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Text style={styles.clearBtn}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {query.length === 0 ? (
          <>
            <Text style={styles.sectionTitle}>Popular Destinations</Text>
            <View style={styles.tagsContainer}>
              {popular.map(city => (
                <TouchableOpacity key={city} style={styles.tag} onPress={() => setQuery(city)}>
                  <Text style={styles.tagText}>📍 {city}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <>
            <Text style={styles.sectionTitle}>{filtered.length} Results</Text>
            {filtered.map(activity => (
              <TouchableOpacity
                key={activity.id}
                style={styles.card}
                onPress={() => router.push('/(tabs)/activity')}>
                <Image source={{ uri: activity.image }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{activity.title}</Text>
                  <Text style={styles.cardLocation}>📍 {activity.city}, {activity.country}</Text>
                  <View style={styles.cardBottom}>
                    <Text style={styles.cardRating}>⭐ {activity.rating}</Text>
                    <Text style={styles.cardPrice}>From ${activity.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            {filtered.length === 0 && (
              <View style={styles.noResults}>
                <Text style={styles.noResultsEmoji}>🔍</Text>
                <Text style={styles.noResultsText}>No results found</Text>
                <Text style={styles.noResultsSub}>Try a different search term</Text>
              </View>
            )}
          </>
        )}
        <View style={{ height: 80 }} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/explore')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={[styles.navLabel, styles.navLabelActive]}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/saved')}>
          <Text style={styles.navIcon}>🤍</Text>
          <Text style={styles.navLabel}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/profile')}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8F0',
    marginHorizontal: 24,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#0A0A0A',
  },
  clearBtn: {
    fontSize: 16,
    color: '#999',
    paddingLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0A0A0A',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 24,
    gap: 10,
  },
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFF8F0',
    borderRadius: 50,
  },
  tagText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  card: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: '#FFF8F0',
    overflow: 'hidden',
  },
  cardImage: {
    width: 90,
    height: 90,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0A0A0A',
  },
  cardLocation: {
    fontSize: 12,
    color: '#999',
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardRating: {
    fontSize: 12,
    color: '#666',
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FF6B35',
  },
  noResults: {
    alignItems: 'center',
    paddingTop: 60,
  },
  noResultsEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0A0A0A',
    marginBottom: 8,
  },
  noResultsSub: {
    fontSize: 14,
    color: '#999',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingVertical: 10,
    paddingBottom: 20,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  navItemActive: {
    borderTopWidth: 2,
    borderTopColor: '#FF6B35',
  },
  navIcon: {
    fontSize: 22,
  },
  navLabel: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
  navLabelActive: {
    color: '#FF6B35',
    fontWeight: '700',
  },
});