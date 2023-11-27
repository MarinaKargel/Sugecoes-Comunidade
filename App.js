import { StyleSheet, View } from 'react-native';
import SugestoesScreen from './src/screen/SugestoesScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SugestoesScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#828282',
    alignItems: 'center'
  },
});
