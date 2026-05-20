import { activities } from '@/constants/data';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SavedScreen() {
  const router = useRouter();
  const [saved, setSaved] = useState(activities.slice(0, 4));

  const removeItem = (id: number) => {
    setSaved(prev => prev.filter(a => a.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wishlist</Text>
        <View style={styles.tabs}>
          <View style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Upcoming</Text>
          </View>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Past</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {saved.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="heart-outline" size={80} color="#E0E0E0" />
            <Text style={styles.emptyTitle}>You have no upcoming lists</Text>
            <Text style={styles.emptySub}>Add activities to a list by tapping the heart icon</Text>
            <TouchableOpacity style={styles.exploreBtn} onPress={() => router.push('/(tabs)/explore')}>
              <Text style={styles.exploreBtnText}>Find things to do</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.list}>
            {saved.map(activity => (
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
                <TouchableOpacity style={styles.removeBtn} onPress={() => removeItem(activity.id)}>
                  <Ionicons name="heart" size={22} color="#FF6B35" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
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
          <Ionicons name="heart" size={24} color="#FF6B35" />
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
  header: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 0,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0A0A0A',
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tabActive: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#FF6B35',
    marginRight: 16,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tabTextActive: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FF6B35',
  },
  tabText: {
    fontSize: 15,
    color: '#999',
  },
  empty: {
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 40,
    gap: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0A0A0A',
    textAlign: 'center',
  },
  emptySub: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 22,
  },
  exploreBtn: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 50,
    marginTop: 8,
  },
  exploreBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
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
  removeBtn: {
    padding: 16,
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