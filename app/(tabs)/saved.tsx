import { activities } from '@/constants/data';
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
                <Image source={{ uri: activity.image }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{activity.title}</Text>
                  <Text style={styles.cardLocation}>📍 {activity.city}, {activity.country}</Text>
                  <View style={styles.cardBottom}>
                    <Text style={styles.cardRating}>⭐ {activity.rating}</Text>
                    <Text style={styles.cardPrice}>From ${activity.price}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.removeBtn} onPress={() => removeItem(activity.id)}>
                  <Text style={styles.removeBtnText}>❤️</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View style={{ height: 80 }} />
      </ScrollView>

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
    backgroundColor: '#FF6B35',
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
    backgroundColor: '#FFF8F0',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
  },
  cardImage: {
    width: 90,
    height: 90,
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
    color: '#FF6B35',
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