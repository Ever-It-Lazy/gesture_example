import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import GestureScreen from './GestureScreen';
import OtherScreen from './OtherScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false, autoHideHomeIndicator: true}}>
				<Stack.Screen name="GestureScreen" component={gestureHandlerRootHOC(GestureScreen)} />
				<Stack.Screen name="OtherScreen" component={OtherScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}