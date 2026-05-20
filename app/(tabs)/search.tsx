import { activities } from '@/constants/data';
import { Ionicons } from '@expo/vector-icons';
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
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Find places and things to do"
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={20} color="#999" />
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
                  <Ionicons name="location-outline" size={14} color="#FF6B35" />
                  <Text style={styles.tagText}> {city}</Text>
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
                onPress={() => router.push(`/(tabs)/activity?id=${activity.id}` as any)}>
                <Image source={{ uri: activity.image }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardCategory}>{activity.category}</Text>
                  <Text style={styles.cardTitle}>{activity.title}</Text>
                  <Text style={styles.cardLocation}>{activity.city}, {activity.country}</Text>
                  <View style={styles.cardBottom}>
                    <View style={styles.ratingRow}>
                      <Ionicons name="star" size={12} color="#FF6B35" />
                      <Text style={styles.cardRating}> {activity.rating}</Text>
                    </View>
                    <Text style={styles.cardPrice}>From ${activity.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            {filtered.length === 0 && (
              <View style={styles.noResults}>
                <Ionicons name="search" size={48} color="#E0E0E0" />
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
          <Ionicons name="search-outline" size={24} color="#999" />
          <Text style={styles.navLabel}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Ionicons name="heart-outline" size={24} color="#FF6B35" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="#999" />
          <Text style={styles.navLabel}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/booking')}>
          <Ionicons name="ticket-outline" size={24} color="#999" />
          <Text style={styles.navLabel}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/profile')}>
          <Ionicons name="person-outline" size={24} color="#999" />
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#0A0A0A',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0A0A0A',
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  cardCategory: {
    fontSize: 10,
    color: '#999',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0A0A0A',
    marginBottom: 4,
  },
  cardLocation: {
    fontSize: 12,
    color: '#999',
    marginBottom: 6,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRating: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  noResults: {
    alignItems: 'center',
    paddingTop: 60,
    gap: 12,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0A0A0A',
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