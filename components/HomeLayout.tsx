import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import ProductCategories from './ProductCategories';
import ProductList from './ProductList';

const HomeLayout: FC = (props) => {
	return (
		<View style={styles.container}>
			<ProductCategories style={styles.categories} />
			{props.children}
			<ProductList style={styles.list} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	categories: {
		marginTop: 20,
	},
	list: {
		marginTop: 30,
	},
});

export default HomeLayout;
