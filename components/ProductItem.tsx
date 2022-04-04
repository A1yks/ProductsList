import { FC } from 'react';
import { View, Image, StyleSheet, Text, ViewStyle } from 'react-native';
import formatPrice from '../utils/formatPrice';
import getTextPart from '../utils/getTextPart';
import { ProductInfo } from './ProductList';

type Props = {
	product: ProductInfo;
	style?: ViewStyle;
};

const ProductItem: FC<Props> = (props) => {
	return (
		<View style={[styles.container, props.style]}>
			<View>
				<Image source={{ uri: props.product.image }} style={styles.image} />
			</View>
			<View style={styles.productInfo}>
				<Text style={styles.text}>{getTextPart(props.product.title)}</Text>
				<Text style={styles.description}>{getTextPart(props.product.description, 2)}</Text>
			</View>
			<Text style={[styles.price, styles.text]}>{formatPrice(props.product.price)} $</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 60,
		alignItems: 'center',
	},
	productInfo: {
		marginLeft: 20,
	},
	imageWrapper: {
		width: 60,
		height: 60,
		borderWidth: 1,
		borderColor: '#8392a3',
		borderRadius: 6,
		flexDirection: 'row',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
		aspectRatio: 1,
	},
	price: {
		marginLeft: 'auto',
	},
	text: {
		fontWeight: 'bold',
		color: '#2f3d49',
	},
	description: {
		color: '#8b96a1',
	},
});

export default ProductItem;
