import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AboutDev: FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Laboratory work №2</Text>
			<Text style={[styles.text, styles.indent]}>Group number: 951007</Text>
			<Text style={[styles.text, styles.indent]}>Name: Alexey Kuftirev</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#fff',
	},
	text: {
		fontSize: 30,
		color: '#000',
	},
	indent: {
		marginTop: 10,
	},
});

export default AboutDev;
