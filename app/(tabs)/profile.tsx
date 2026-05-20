import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>👋 Hi Alphavam</Text>
            <Text style={styles.email}>alphavam@gmail.com</Text>
          </View>
          <TouchableOpacity style={styles.bellBtn}>
            <Ionicons name="notifications-outline" size={24} color="#0A0A0A" />
          </TouchableOpacity>
        </View>

        {/* Settings */}
        <Text style={styles.sectionTitle}>Settings</Text>
        {[
          { label: 'Personal details', icon: 'person-outline' },
          { label: 'Saved cards', icon: 'card-outline' },
          { label: 'Currency', icon: 'cash-outline', value: 'USD' },
          { label: 'Language', icon: 'language-outline', value: 'English' },
          { label: 'Notifications', icon: 'notifications-outline' },
        ].map(item => (
          <TouchableOpacity key={item.label} style={styles.settingItem}>
            <Ionicons name={item.icon as any} size={20} color="#0A0A0A" style={styles.settingIcon} />
            <Text style={styles.settingText}>{item.label}</Text>
            <View style={styles.settingRight}>
              {item.value && <Text style={styles.settingValue}>{item.value}</Text>}
              <Ionicons name="chevron-forward" size={18} color="#999" />
            </View>
          </TouchableOpacity>
        ))}

        {/* Support */}
        <Text style={styles.sectionTitle}>Support</Text>
        {[
          { label: 'About OssOss', icon: 'information-circle-outline' },
          { label: 'Help Center', icon: 'help-circle-outline' },
          { label: 'Chat with us', icon: 'chatbubble-outline' },
        ].map(item => (
          <TouchableOpacity key={item.label} style={styles.settingItem}>
            <Ionicons name={item.icon as any} size={20} color="#0A0A0A" style={styles.settingIcon} />
            <Text style={styles.settingText}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color="#999" />
          </TouchableOpacity>
        ))}

        {/* Feedback */}
        <Text style={styles.sectionTitle}>Feedback</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="star-outline" size={20} color="#0A0A0A" style={styles.settingIcon} />
          <Text style={styles.settingText}>Rate the app</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

        {/* Log Out */}
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="log-out-outline" size={20} color="#FF6B35" style={styles.settingIcon} />
          <Text style={styles.logOut}>Log out</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Version 1.0.0</Text>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/explore')}>
          <Ionicons name="search-outline" size={24} color="#999" />
          <Text style={styles.navLabel}>Discover</Text>
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
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Ionicons name="person" size={24} color="#FF6B35" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Profile</Text>
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
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  email: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },
  bellBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0A0A0A',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F9F9F9',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingIcon: {
    marginRight: 12,
  },
  settingText: {
    flex: 1,
    fontSize: 15,
    color: '#0A0A0A',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  settingValue: {
    fontSize: 14,
    color: '#999',
  },
  logOut: {
    flex: 1,
    fontSize: 15,
    color: '#FF6B35',
    fontWeight: '600',
  },
  version: {
    textAlign: 'center',
    fontSize: 12,
    color: '#ccc',
    paddingVertical: 16,
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