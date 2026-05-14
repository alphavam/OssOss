import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const savedActivities = [
  { id: 1, title: 'Desert Safari', location: 'Dubai, UAE', price: 89, rating: 4.9, emoji: '🐪' },
  { id: 2, title: 'Santorini Sunset', location: 'Santorini, Greece', price: 75, rating: 4.9, emoji: '🌅' },
  { id: 3, title: 'Scuba Diving', location: 'Maldives', price: 120, rating: 5.0, emoji: '🤿' },
  { id: 4, title: 'Eiffel Tower Tour', location: 'Paris, France', price: 65, rating: 4.8, emoji: '🗼' },
];

export default function SavedScreen() {
  const router = useRouter();
  const [saved, setSaved] = useState(savedActivities);

  const removeItem = (id: number) => {
    setSaved(prev => prev.filter(a => a.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saved</Text>
        <Text style={styles.headerCount}>{saved.length} activities</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {saved.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>🤍</Text>
            <Text style={styles.emptyTitle}>No saved activities</Text>
            <Text style={styles.emptySub}>Save activities you love to find them easily later</Text>
            <TouchableOpacity style={styles.exploreBtn} onPress={() => router.push('/(tabs)/explore')}>
              <Text style={styles.exploreBtnText}>Explore Activities</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.list}>
            {saved.map(activity => (
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
                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => removeItem(activity.id)}>
                  <Text style={styles.removeBtnText}>❤️</Text>
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
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/search')}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIcon}>❤️</Text>
          <Text style={[styles.navLabel, styles.navLabelActive]}>Saved</Text>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  headerCount: {
    fontSize: 14,
    color: '#999',
  },
  empty: {
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 40,
  },
  emptyEmoji: {
    fontSize: 60,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0A0A0A',
    marginBottom: 8,
  },
  emptySub: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  exploreBtn: {
    backgroundColor: '#E63946',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 50,
  },
  exploreBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  list: {
    padding: 24,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
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
  },
  cardTitle: {
    fontSize: 15,
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
  },
  cardRating: {
    fontSize: 12,
    color: '#666',
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: '900',
    color: '#E63946',
  },
  removeBtn: {
    padding: 16,
  },
  removeBtnText: {
    fontSize: 20,
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