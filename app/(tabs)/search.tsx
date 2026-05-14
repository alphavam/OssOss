import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const allActivities = [
  { id: 1, title: 'Desert Safari', location: 'Dubai, UAE', price: 89, rating: 4.9, duration: '6h', emoji: '🐪', category: 'Adventure' },
  { id: 2, title: 'Eiffel Tower Tour', location: 'Paris, France', price: 65, rating: 4.8, duration: '3h', emoji: '🗼', category: 'Tours' },
  { id: 3, title: 'Surfing Lesson', location: 'Bali, Indonesia', price: 45, rating: 4.7, duration: '2h', emoji: '🏄', category: 'Water' },
  { id: 4, title: 'Colosseum Tour', location: 'Rome, Italy', price: 35, rating: 4.6, duration: '4h', emoji: '🏛️', category: 'Culture' },
  { id: 5, title: 'Scuba Diving', location: 'Maldives', price: 120, rating: 5.0, duration: '3h', emoji: '🤿', category: 'Water' },
  { id: 6, title: 'Santorini Sunset', location: 'Santorini, Greece', price: 75, rating: 4.9, duration: '2h', emoji: '🌅', category: 'Tours' },
  { id: 7, title: 'Cooking Class', location: 'Tokyo, Japan', price: 55, rating: 4.8, duration: '3h', emoji: '🍜', category: 'Food' },
  { id: 8, title: 'City Night Tour', location: 'New York, USA', price: 40, rating: 4.7, duration: '2h', emoji: '🌆', category: 'Night' },
];

const popular = ['Dubai', 'Paris', 'Bali', 'Tokyo', 'New York', 'London', 'Rome', 'Maldives'];

export default function SearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const filtered = allActivities.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.location.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Search Input */}
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
            {/* Popular Searches */}
            <Text style={styles.sectionTitle}>Popular Destinations</Text>
            <View style={styles.tagsContainer}>
              {popular.map(city => (
                <TouchableOpacity
                  key={city}
                  style={styles.tag}
                  onPress={() => setQuery(city)}>
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
                <View style={styles.cardImage}>
                  <Text style={styles.cardEmoji}>{activity.emoji}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{activity.title}</Text>
                  <Text style={styles.cardLocation}>📍 {activity.location}</Text>
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

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/explore')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={[styles.navLabel, styles.navLabelActive]}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
    backgroundColor: '#F5F5F5',
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
    backgroundColor: '#F5F5F5',
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
    backgroundColor: '#F9F9F9',
    overflow: 'hidden',
  },
  cardImage: {
    width: 90,
    height: 90,
    backgroundColor: '#FFE5E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardEmoji: {
    fontSize: 36,
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
    color: '#E63946',
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
    borderTopColor: '#E63946',
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
    color: '#E63946',
    fontWeight: '700',
  },
});