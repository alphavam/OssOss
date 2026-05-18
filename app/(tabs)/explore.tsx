import { activities, categories, countries } from '@/constants/data';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const cities = countries.slice(0, 6).map(c => ({ name: c.cities[0], country: c.name, emoji: c.emoji }));
export default function HomeScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? activities : activities.filter(a => a.category === activeCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Traveler 👋</Text>
            <Text style={styles.headerTitle}>Where to next?</Text>
            <TouchableOpacity style={styles.countriesBtn} onPress={() => router.push('/countries' as any)}>
              <Text style={styles.countriesBtnText}>🌍 Browse Countries</Text>
            </TouchableOpacity>
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
          <Ionicons name="home" size={24} color="#FF6B35" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/search')}>
          <Ionicons name="search" size={24} color="#999" />
          <Text style={styles.navLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/saved')}>
          <Ionicons name="heart-outline" size={24} color="#999" />
          <Text style={styles.navLabel}>Saved</Text>
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
  countriesBtn: {
    backgroundColor: '#FFF8F0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  countriesBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FF6B35',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF6B35',
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
    backgroundColor: '#FFF8F0',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    width: 90,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
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
    backgroundColor: '#FFF8F0',
    marginRight: 10,
  },
  categoryBtnActive: {
    backgroundColor: '#FF6B35',
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
    backgroundColor: '#FFF8F0',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImage: {
    height: 160,
    width: '100%',
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
    color: '#FF6B35',
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