import { macroCycle } from './src/algorithms/generator';
import { Text, View } from 'react-native';

export default function App() {
  const orms = {
    bench: 185,
    squat: 200,
    rows: 100,
    deadlifts: 275,
  };

  const plan = macroCycle(orms);
  console.log(plan);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}
