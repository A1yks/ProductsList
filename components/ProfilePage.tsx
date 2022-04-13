import { FC } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const ProfilePage: FC = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageWrapper}>
				<Image source={require('../assets/profile.png')} style={styles.image} />
			</View>
			<View style={styles.infoWrapper}>
				<Text style={styles.text}>Куфтырев Алексей Викторович</Text>
				<Text style={[styles.text, styles.indent]}>kuftirev.alex@gmail.com</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingTop: 35,
		backgroundColor: '#fff',
		flex: 1,
	},
	imageWrapper: {
		width: 100,
		height: 100,
		flexDirection: 'row',
	},
	image: {
		resizeMode: 'contain',
		width: '100%',
		height: '100%',
		aspectRatio: 1,
	},
	infoWrapper: {
		alignItems: 'center',
		marginTop: 20,
	},
	text: {
		fontSize: 18,
	},
	indent: {
		marginTop: 10,
	},
});

export default ProfilePage;
