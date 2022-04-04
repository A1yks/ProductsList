import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Jewelery & Electronics store</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#e6e8eb',
		alignSelf: 'stretch',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#36434e',
		textAlign: 'center',
	},
});

export default Header;
