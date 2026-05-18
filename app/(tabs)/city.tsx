import { activities, countries } from '@/constants/data';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CityScreen() {
  const router = useRouter();
  const cityName = 'Dubai';
  const countryData = countries.find(c => c.cities.includes(cityName));
  const cityActivities = activities.filter(a => a.city === cityName);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#0A0A0A" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>{cityName}</Text>
          <Text style={styles.headerSubtitle}>{countryData?.name} {countryData?.emoji}</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* City Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>{countryData?.emoji}</Text>
          <Text style={styles.heroTitle}>{cityName}</Text>
          <Text style={styles.heroSub}>{cityActivities.length} activities available</Text>
        </View>

        {/* Activities */}
        <Text style={styles.sectionTitle}>Activities in {cityName}</Text>
        {cityActivities.length > 0 ? (
          cityActivities.map(activity => (
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
          ))
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>🏙️</Text>
            <Text style={styles.emptyText}>No activities yet in {cityName}</Text>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 8,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerInfo: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#999',
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#FFF8F0',
    marginBottom: 24,
  },
  heroEmoji: {
    fontSize: 60,
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0A0A0A',
    marginBottom: 4,
  },
  heroSub: {
    fontSize: 14,
    color: '#999',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0A0A0A',
    paddingHorizontal: 24,
    marginBottom: 16,
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
  empty: {
    alignItems: 'center',
    paddingTop: 60,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});