import { activities } from '@/constants/data';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ActivityScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const activity = activities.find(a => a.id === Number(id)) || activities[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: activity.image }}
            style={styles.image}
          />
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#0A0A0A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteBtn}>
            <Ionicons name="heart-outline" size={22} color="#0A0A0A" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Title & Rating */}
          <View style={styles.titleRow}>
            <Text style={styles.title}>{activity.title}</Text>
            <View style={styles.ratingBadge}>
              <Ionicons name="star" size={14} color="#FF6B35" />
              <Text style={styles.ratingText}> {activity.rating}</Text>
            </View>
          </View>

          <View style={styles.locationRow}>
            <Ionicons name="location" size={14} color="#999" />
            <Text style={styles.location}> {activity.city}, {activity.country}</Text>
          </View>

          {/* Info Row */}
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Ionicons name="time-outline" size={20} color="#FF6B35" />
              <Text style={styles.infoLabel}>Duration</Text>
              <Text style={styles.infoValue}>{activity.duration}</Text>
            </View>
            <View style={styles.infoDivider} />
            <View style={styles.infoItem}>
              <Ionicons name="people-outline" size={20} color="#FF6B35" />
              <Text style={styles.infoLabel}>Group</Text>
              <Text style={styles.infoValue}>Max 12</Text>
            </View>
            <View style={styles.infoDivider} />
            <View style={styles.infoItem}>
              <Ionicons name="language-outline" size={20} color="#FF6B35" />
              <Text style={styles.infoLabel}>Language</Text>
              <Text style={styles.infoValue}>English</Text>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>
            Experience the best of {activity.city} with our premium {activity.title}.
            An unforgettable adventure awaits you in {activity.country}!
          </Text>

          {/* Includes */}
          <Text style={styles.sectionTitle}>What's Included</Text>
          <View style={styles.includesList}>
            {['Hotel pickup & dropoff', 'Professional guide', 'All equipment', 'Refreshments', 'Photos & memories'].map(item => (
              <View key={item} style={styles.includeItem}>
                <Ionicons name="checkmark-circle" size={18} color="#FF6B35" />
                <Text style={styles.includeText}>{item}</Text>
              </View>
            ))}
          </View>

          {/* Reviews */}
          <Text style={styles.sectionTitle}>Reviews (248)</Text>
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={styles.reviewAvatar}>
                <Text style={styles.reviewAvatarText}>J</Text>
              </View>
              <View>
                <Text style={styles.reviewName}>John D.</Text>
                <View style={styles.starsRow}>
                  {[1,2,3,4,5].map(i => (
                    <Ionicons key={i} name="star" size={12} color="#FF6B35" />
                  ))}
                </View>
              </View>
            </View>
            <Text style={styles.reviewText}>Amazing experience! The guide was fantastic and the views were breathtaking.</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Book Button */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.priceLabel}>From</Text>
          <Text style={styles.price}>${activity.price} <Text style={styles.pricePer}>/ person</Text></Text>
        </View>
        <TouchableOpacity style={styles.bookBtn} onPress={() => router.push('/(tabs)/booking')}>
          <Text style={styles.bookBtnText}>Book Now</Text>
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
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: 300,
    width: '100%',
  },
  backBtn: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  favoriteBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    padding: 24,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0A0A0A',
    flex: 1,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF6B35',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  location: {
    fontSize: 14,
    color: '#999',
  },
  infoRow: {
    flexDirection: 'row',
    backgroundColor: '#FFF8F0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  infoLabel: {
    fontSize: 11,
    color: '#999',
  },
  infoValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0A0A0A',
  },
  infoDivider: {
    width: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0A0A0A',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 24,
  },
  includesList: {
    marginBottom: 24,
  },
  includeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  includeText: {
    fontSize: 14,
    color: '#333',
  },
  reviewCard: {
    backgroundColor: '#FFF8F0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 100,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 12,
  },
  reviewAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FF6B35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewAvatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  reviewName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0A0A0A',
    marginBottom: 2,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 2,
  },
  reviewText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 20,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  priceLabel: {
    fontSize: 12,
    color: '#999',
  },
  price: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  pricePer: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999',
  },
  bookBtn: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 50,
  },
  bookBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});