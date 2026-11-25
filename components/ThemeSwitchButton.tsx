import { Switch, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useThemeStore } from '../state/useThemeStore';

export default function ThemeSwitchButton() {
  const { isDark, toggleTheme } = useThemeStore()

  return (
    <View style={styles.row}>
      <Text>{isDark ? 'Dark' : 'Light'}</Text>
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        accessibilityLabel="Toggle theme" />
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 12,
  },
});
