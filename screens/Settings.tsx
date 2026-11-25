import { View, Text, StyleSheet } from 'react-native'
import ThemeSwitchButton from '../components/ThemeSwitchButton';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings page</Text>
      <ThemeSwitchButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});