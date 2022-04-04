import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import ProductCategories from './ProductCategories';
import ProductList from './ProductList';

const Home: FC = () => {
	return (
		<View style={styles.container}>
			<ProductCategories style={styles.categories} />
			<ProductList style={styles.list} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	categories: {
		marginTop: 20,
	},
	list: {
		marginTop: 30,
	},
});

export default Home;
