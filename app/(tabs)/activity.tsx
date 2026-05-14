import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ActivityScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <Text style={styles.imageEmoji}>🌍</Text>
          </View>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <View style={styles.favoriteBtn}>
            <Text>🤍</Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Title & Rating */}
          <View style={styles.titleRow}>
            <Text style={styles.title}>Desert Safari</Text>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>⭐ 4.9</Text>
            </View>
          </View>

          <Text style={styles.location}>📍 Dubai, UAE</Text>

          {/* Info Row */}
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>⏱</Text>
              <Text style={styles.infoLabel}>Duration</Text>
              <Text style={styles.infoValue}>6 hours</Text>
            </View>
            <View style={styles.infoDivider} />
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>👥</Text>
              <Text style={styles.infoLabel}>Group</Text>
              <Text style={styles.infoValue}>Max 12</Text>
            </View>
            <View style={styles.infoDivider} />
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>🌐</Text>
              <Text style={styles.infoLabel}>Language</Text>
              <Text style={styles.infoValue}>English</Text>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>
            Experience the magic of the Arabian desert with our premium safari. 
            Enjoy dune bashing, camel riding, sandboarding, and a traditional 
            BBQ dinner under the stars. An unforgettable adventure awaits!
          </Text>

          {/* Includes */}
          <Text style={styles.sectionTitle}>What's Included</Text>
          <View style={styles.includesList}>
            {['Hotel pickup & dropoff', 'BBQ dinner', 'Camel ride', 'Sandboarding', 'Live entertainment'].map(item => (
              <View key={item} style={styles.includeItem}>
                <Text style={styles.includeCheck}>✓</Text>
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
                <Text style={styles.reviewStars}>⭐⭐⭐⭐⭐</Text>
              </View>
            </View>
            <Text style={styles.reviewText}>Amazing experience! The guide was fantastic and the sunset views were breathtaking.</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Book Button */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.priceLabel}>From</Text>
          <Text style={styles.price}>$89 <Text style={styles.pricePer}>/ person</Text></Text>
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
    height: 280,
    backgroundColor: '#FFE5E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageEmoji: {
    fontSize: 80,
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
  },
  backText: {
    fontSize: 20,
    fontWeight: 'bold',
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
    backgroundColor: '#FFF3F3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E63946',
  },
  location: {
    fontSize: 14,
    color: '#999',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  infoLabel: {
    fontSize: 11,
    color: '#999',
    marginBottom: 2,
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
    marginBottom: 8,
  },
  includeCheck: {
    color: '#E63946',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  includeText: {
    fontSize: 14,
    color: '#333',
  },
  reviewCard: {
    backgroundColor: '#F9F9F9',
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
    backgroundColor: '#E63946',
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
  },
  reviewStars: {
    fontSize: 12,
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
    backgroundColor: '#E63946',
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