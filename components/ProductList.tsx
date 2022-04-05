import { FC, memo } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { useAppContext } from '../context/AppContext';

import ProductItem from './ProductItem';

type Props = {
	style?: ViewStyle;
};

const ProductList: FC<Props> = (props) => {
	const { foundProducts, productsLoading } = useAppContext();

	if (productsLoading)
		return (
			<View style={styles.spinnerWrapper}>
				<ActivityIndicator color="#3080ed" size="large" />
			</View>
		);

	return (
		<ScrollView style={[styles.container, props.style]}>
			{foundProducts.map((product, i) => (
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

export default memo(ProductList);
