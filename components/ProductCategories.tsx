import { FC, useCallback } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Categories, useAppContext } from '../context/AppContext';
import ProductButton from './ProductButton';

type Props = {
	style?: ViewStyle;
};

const categories = Object.values(Categories);

const ProductCategories: FC<Props> = (props) => {
	const { selectedCategory, selectCategory } = useAppContext();

	const pressHandler = useCallback((category: Categories) => {
		return () => {
			selectCategory(category);
		};
	}, []);

	return (
		<View style={[styles.container, props.style]}>
			{categories.map((category, i) => (
				<ProductButton
					key={category}
					title={category}
					onPress={pressHandler(category)}
					active={selectedCategory === category}
					style={i > 0 ? styles.indent : undefined}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
	indent: {
		marginLeft: -8,
	},
});

export default ProductCategories;
