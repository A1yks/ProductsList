import { FC } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent, Text, TouchableNativeFeedback, StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
	onPress: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
	title: string;
	active?: boolean;
	style?: ViewStyle;
};

const ProductButton: FC<Props> = (props) => {
	// return <Button onPress={props.onPress} title={props.title} />;

	return (
		<TouchableNativeFeedback onPress={props.onPress}>
			<View style={[styles.button, props.active && styles.activeView, props.style]}>
				<Text style={[styles.text, props.active && styles.activeText]}>{props.title}</Text>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	button: {
		borderColor: '#9fa5ab',
		borderWidth: 1,
		flex: 1,
		padding: 4,
		borderRadius: 6,
		backgroundColor: '#fff',
	},
	text: {
		textAlign: 'center',
		color: '#4e5963',
	},
	activeView: {
		backgroundColor: '#3080ed',
		zIndex: 1,
		borderColor: '#4a72a4',
	},
	activeText: {
		color: '#fff',
	},
});

export default ProductButton;
