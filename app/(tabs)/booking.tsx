import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const dates = ['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Fri 16', 'Sat 17', 'Sun 18'];

export default function BookingScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('Wed 14');
  const [people, setPeople] = useState(2);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Book Activity</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.content}>
          {/* Activity Summary */}
          <View style={styles.summaryCard}>
            <View style={styles.summaryImage}>
              <Text style={styles.summaryEmoji}>🌍</Text>
            </View>
            <View style={styles.summaryInfo}>
              <Text style={styles.summaryTitle}>Desert Safari</Text>
              <Text style={styles.summaryLocation}>📍 Dubai, UAE</Text>
              <Text style={styles.summaryDuration}>⏱ 6 hours</Text>
            </View>
          </View>

          {/* Select Date */}
          <Text style={styles.sectionTitle}>Select Date</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.datesContainer}>
            {dates.map(date => (
              <TouchableOpacity
                key={date}
                style={[styles.dateBtn, selectedDate === date && styles.dateBtnActive]}
                onPress={() => setSelectedDate(date)}>
                <Text style={[styles.dateBtnText, selectedDate === date && styles.dateBtnTextActive]}>
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Number of People */}
          <Text style={styles.sectionTitle}>Number of People</Text>
          <View style={styles.peopleSelector}>
            <TouchableOpacity
              style={styles.peopleBtn}
              onPress={() => people > 1 && setPeople(people - 1)}>
              <Text style={styles.peopleBtnText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.peopleCount}>{people}</Text>
            <TouchableOpacity
              style={styles.peopleBtn}
              onPress={() => setPeople(people + 1)}>
              <Text style={styles.peopleBtnText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Price Summary */}
          <Text style={styles.sectionTitle}>Price Summary</Text>
          <View style={styles.priceCard}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>$89 x {people} people</Text>
              <Text style={styles.priceValue}>${89 * people}</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Service fee</Text>
              <Text style={styles.priceValue}>$5</Text>
            </View>
            <View style={styles.priceDivider} />
            <View style={styles.priceRow}>
              <Text style={styles.priceTotalLabel}>Total</Text>
              <Text style={styles.priceTotalValue}>${89 * people + 5}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.confirmBtn} onPress={() => router.push('/(tabs)/explore')}>
          <Text style={styles.confirmBtnText}>Confirm Booking</Text>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  content: {
    padding: 24,
  },
  summaryCard: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    gap: 16,
  },
  summaryImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#FFE5E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryEmoji: {
    fontSize: 32,
  },
  summaryInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0A0A0A',
    marginBottom: 4,
  },
  summaryLocation: {
    fontSize: 13,
    color: '#999',
    marginBottom: 2,
  },
  summaryDuration: {
    fontSize: 13,
    color: '#999',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0A0A0A',
    marginBottom: 16,
  },
  datesContainer: {
    marginBottom: 24,
  },
  dateBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  dateBtnActive: {
    backgroundColor: '#E63946',
  },
  dateBtnText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  dateBtnTextActive: {
    color: '#FFFFFF',
  },
  peopleSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  peopleBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E63946',
    alignItems: 'center',
    justifyContent: 'center',
  },
  peopleBtnText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  peopleCount: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  priceCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 100,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
  },
  priceValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0A0A0A',
  },
  priceDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 12,
  },
  priceTotalLabel: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  priceTotalValue: {
    fontSize: 16,
    fontWeight: '900',
    color: '#E63946',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  confirmBtn: {
    backgroundColor: '#E63946',
    paddingVertical: 18,
    borderRadius: 50,
    alignItems: 'center',
  },
  confirmBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});