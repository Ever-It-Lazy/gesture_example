import { StyleSheet, Text, Pressable } from 'react-native';
import { GestureHandlerRootView, Gesture, GestureDetector } from "react-native-gesture-handler";

export default function StartScreen({navigation}) {
	const doubleTap = Gesture.Tap()
	.numberOfTaps(2)
	.onStart(() => {
		navigation.navigate('OtherScreen');
	});

	return (
		<GestureHandlerRootView style={styles.container}>
			<GestureDetector gesture={doubleTap}>
				<Pressable style={styles.button}>
					<Text style={styles.buttonLabel}>Double Tap to go to the other screen</Text>
				</Pressable>
			</GestureDetector>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		borderRadius: 10,
		flexDirection: 'row',
		borderWidth: 1,
		padding: 20,
	},
	buttonLabel: {
		//color: 'black'
	}
});
