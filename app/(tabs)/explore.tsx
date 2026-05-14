import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const categories = ['All', 'Tours', 'Adventure', 'Food', 'Culture', 'Water', 'Night'];

const featured = [
  { id: 1, title: 'Desert Safari', location: 'Dubai, UAE', price: 89, rating: 4.9, duration: '6h', emoji: '🐪' },
  { id: 2, title: 'Eiffel Tower Tour', location: 'Paris, France', price: 65, rating: 4.8, duration: '3h', emoji: '🗼' },
  { id: 3, title: 'Surfing Lesson', location: 'Bali, Indonesia', price: 45, rating: 4.7, duration: '2h', emoji: '🏄' },
  { id: 4, title: 'Colosseum Tour', location: 'Rome, Italy', price: 35, rating: 4.6, duration: '4h', emoji: '🏛️' },
  { id: 5, title: 'Scuba Diving', location: 'Maldives', price: 120, rating: 5.0, duration: '3h', emoji: '🤿' },
  { id: 6, title: 'Santorini Sunset', location: 'Santorini, Greece', price: 75, rating: 4.9, duration: '2h', emoji: '🌅' },
];

const cities = [
  { name: 'Dubai', country: 'UAE', emoji: '🇦🇪' },
  { name: 'Paris', country: 'France', emoji: '🇫🇷' },
  { name: 'Tokyo', country: 'Japan', emoji: '🇯🇵' },
  { name: 'New York', country: 'USA', emoji: '🇺🇸' },
  { name: 'Bali', country: 'Indonesia', emoji: '🇮🇩' },
  { name: 'London', country: 'UK', emoji: '🇬🇧' },
];

export default function HomeScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Traveler 👋</Text>
            <Text style={styles.headerTitle}>Where to next?</Text>
          </View>
          <TouchableOpacity style={styles.avatar} onPress={() => router.push('/(tabs)/profile')}>
            <Text style={styles.avatarText}>A</Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search activities, cities..."
            placeholderTextColor="#999"
          />
        </View>

        {/* Popular Cities */}
        <Text style={styles.sectionTitle}>Popular Cities</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.citiesContainer}>
          {cities.map(city => (
            <TouchableOpacity key={city.name} style={styles.cityCard}>
              <Text style={styles.cityEmoji}>{city.emoji}</Text>
              <Text style={styles.cityName}>{city.name}</Text>
              <Text style={styles.cityCountry}>{city.country}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map(cat => (
            <TouchableOpacity
              key={cat}
              style={[styles.categoryBtn, activeCategory === cat && styles.categoryBtnActive]}
              onPress={() => setActiveCategory(cat)}>
              <Text style={[styles.categoryText, activeCategory === cat && styles.categoryTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Activities */}
        <Text style={styles.sectionTitle}>Featured Activities</Text>
        {featured.map(activity => (
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
                <View style={styles.cardMeta}>
                  <Text style={styles.cardRating}>⭐ {activity.rating}</Text>
                  <Text style={styles.cardDuration}>⏱ {activity.duration}</Text>
                </View>
                <Text style={styles.cardPrice}>From ${activity.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={[styles.navLabel, styles.navLabelActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/search')}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navLabel}>Search</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 14,
    color: '#999',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E63946',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0A0A0A',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  citiesContainer: {
    paddingLeft: 24,
    marginBottom: 24,
  },
  cityCard: {
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    width: 90,
  },
  cityEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  cityName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0A0A0A',
  },
  cityCountry: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
  categoriesContainer: {
    paddingLeft: 24,
    marginBottom: 24,
  },
  categoryBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  categoryBtnActive: {
    backgroundColor: '#E63946',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  card: {
    marginHorizontal: 24,
    marginBottom: 16,
    borderRadius: 20,
    backgroundColor: '#F9F9F9',
    overflow: 'hidden',
  },
  cardImage: {
    height: 160,
    backgroundColor: '#FFE5E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardEmoji: {
    fontSize: 60,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0A0A0A',
    marginBottom: 4,
  },
  cardLocation: {
    fontSize: 13,
    color: '#999',
    marginBottom: 12,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardMeta: {
    flexDirection: 'row',
    gap: 12,
  },
  cardRating: {
    fontSize: 13,
    color: '#666',
  },
  cardDuration: {
    fontSize: 13,
    color: '#666',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: '900',
    color: '#E63946',
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