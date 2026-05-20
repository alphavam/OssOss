import { activities, categories } from '@/constants/data';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const topDestinations = [
  { name: 'Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800' },
  { name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800' },
  { name: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=800' },
  { name: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800' },
];

export default function HomeScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? activities : activities.filter(a => a.category === activeCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Find places and things to do"
            placeholderTextColor="#999"
            onFocus={() => router.push('/(tabs)/search')}
          />
          <Ionicons name="notifications-outline" size={22} color="#0A0A0A" />
        </View>

        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroText}>Discover & book things to do</Text>
          </View>
        </View>

        {/* Top Destinations */}
        <Text style={styles.sectionTitle}>Top destinations</Text>
        <View style={styles.destinationsGrid}>
          {topDestinations.map(dest => (
            <TouchableOpacity key={dest.name} style={styles.destinationCard}>
              <Image source={{ uri: dest.image }} style={styles.destinationImage} />
              <Text style={styles.destinationName}>{dest.name}</Text>
              <Text style={styles.destinationCountry}>{dest.country}</Text>
            </TouchableOpacity>
          ))}
        </View>

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

        {/* Unforgettable Experiences */}
        <Text style={styles.sectionTitle}>Unforgettable experiences</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
          {filtered.map(activity => (
            <TouchableOpacity
              key={activity.id}
              style={styles.card}
              onPress={() => router.push(`/(tabs)/activity?id=${activity.id}` as any)}>
              <View style={styles.cardImageContainer}>
                <Image source={{ uri: activity.image }} style={styles.cardImage} />
                {activity.rating >= 4.9 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Likely to sell out</Text>
                  </View>
                )}
                <TouchableOpacity style={styles.heartBtn}>
                  <Ionicons name="heart-outline" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardCategory}>{activity.category}</Text>
                <Text style={styles.cardTitle} numberOfLines={2}>{activity.title}</Text>
                <Text style={styles.cardDuration}>⏱ {activity.duration}</Text>
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
        </ScrollView>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Ionicons name="search" size={24} color="#FF6B35" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/saved')}>
          <Ionicons name="heart-outline" size={24} color="#999" />
          <Text style={styles.navLabel}>Wishlist</Text>
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
  heroContainer: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    height: 220,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  heroText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0A0A0A',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  destinationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 24,
  },
  destinationCard: {
    width: '47%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  destinationImage: {
    width: '100%',
    height: 130,
    borderRadius: 16,
  },
  destinationName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0A0A0A',
    marginTop: 8,
  },
  destinationCountry: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  categoriesContainer: {
    paddingLeft: 16,
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
  cardsContainer: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  card: {
    width: 220,
    marginRight: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  cardImageContainer: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 140,
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#E63946',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  heartBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    padding: 12,
  },
  cardCategory: {
    fontSize: 11,
    color: '#999',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0A0A0A',
    marginBottom: 6,
  },
  cardDuration: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
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