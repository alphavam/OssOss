import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function BookingScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('');
  const [people, setPeople] = useState(2);

  const today = new Date().toISOString().split('T')[0];

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

          {/* Calendar */}
          <Text style={styles.sectionTitle}>Select Date</Text>
          <View style={styles.calendarContainer}>
            <Calendar
              minDate={today}
              onDayPress={(day: any) => setSelectedDate(day.dateString)}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: '#FF6B35',
                },
              }}
              theme={{
                backgroundColor: '#FFF8F0',
                calendarBackground: '#FFF8F0',
                textSectionTitleColor: '#0A0A0A',
                selectedDayBackgroundColor: '#FF6B35',
                selectedDayTextColor: '#FFFFFF',
                todayTextColor: '#FF6B35',
                dayTextColor: '#0A0A0A',
                textDisabledColor: '#ccc',
                arrowColor: '#FF6B35',
                monthTextColor: '#0A0A0A',
                textDayFontWeight: '600',
                textMonthFontWeight: '900',
                textDayHeaderFontWeight: '700',
              }}
            />
          </View>

          {selectedDate ? (
            <View style={styles.selectedDateBadge}>
              <Text style={styles.selectedDateText}>📅 Selected: {selectedDate}</Text>
            </View>
          ) : null}

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
        <TouchableOpacity
          style={[styles.confirmBtn, !selectedDate && styles.confirmBtnDisabled]}
          onPress={() => selectedDate && router.push('/(tabs)/explore')}>
          <Text style={styles.confirmBtnText}>
            {selectedDate ? 'Confirm Booking' : 'Select a Date First'}
          </Text>
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
    backgroundColor: '#FFF8F0',
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
    backgroundColor: '#FFF8F0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    gap: 16,
  },
  summaryImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#FFF8F0',
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
  calendarContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  selectedDateBadge: {
    backgroundColor: '#FFF8F0',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  selectedDateText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF6B35',
  },
  peopleSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8F0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  peopleBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF6B35',
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
    backgroundColor: '#FFF8F0',
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
    color: '#FF6B35',
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
    backgroundColor: '#FF6B35',
    paddingVertical: 18,
    borderRadius: 50,
    alignItems: 'center',
  },
  confirmBtnDisabled: {
    backgroundColor: '#FFB899',
  },
  confirmBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});