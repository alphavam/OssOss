import { useRouter } from 'expo-router';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />

      <View style={styles.content}>
        <View style={styles.topSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>OSS</Text>
            <Text style={styles.logoTextRed}>OSS</Text>
          </View>
          <Text style={styles.tagline}>Discover the World's Best Activities</Text>
          <Text style={styles.subtitle}>Tours • Adventures • Experiences</Text>
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/explore')}>
            <Text style={styles.buttonText}>Explore Now →</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Login</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  circle1: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: '#E6394615',
    top: -50,
    right: -80,
  },
  circle2: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#E6394610',
    bottom: 100,
    left: -60,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 32,
  },
  topSection: {
    marginTop: 80,
  },
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 52,
    fontWeight: '900',
    color: '#0A0A0A',
    letterSpacing: 4,
  },
  logoTextRed: {
    fontSize: 52,
    fontWeight: '900',
    color: '#E63946',
    letterSpacing: 4,
  },
  tagline: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0A0A0A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    letterSpacing: 2,
  },
  bottomSection: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E63946',
    paddingVertical: 18,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#999',
    fontSize: 14,
    textAlign: 'center',
  },
  loginLink: {
    color: '#E63946',
    fontWeight: 'bold',
  },
});