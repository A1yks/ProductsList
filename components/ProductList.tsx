import { FC, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { API_URL } from '@env';
import ProductItem from './ProductItem';

export interface ProductInfo {
	image: string;
	title: string;
	description: string;
	price: number;
}

interface Product extends ProductInfo {
	id: number;
}

type Props = {
	style?: ViewStyle;
};

const ProductList: FC<Props> = (props) => {
	const { selectedCategory } = useAppContext();
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		async function fetchProducts() {
			try {
				setLoading(true);

				const response = await fetch(`${API_URL}/products/category/${selectedCategory.toLowerCase()}`);
				const data: Product[] = await response.json();

				setProducts(data);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		}

		fetchProducts();
	}, [selectedCategory]);

	if (loading)
		return (
			<View style={styles.spinnerWrapper}>
				<ActivityIndicator color="#3080ed" size="large" />
			</View>
		);

	return (
		<ScrollView style={[styles.container, props.style]}>
			{products.map((product, i) => (
				<ProductItem key={product.id} product={product} style={i > 0 ? styles.indent : undefined} />
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		paddingHorizontal: 20,
	},
	spinnerWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	indent: {
		marginTop: 20,
	},
});

export default ProductList;
