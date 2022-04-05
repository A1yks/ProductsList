import { FC, useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';
import HomeLayout from './HomeLayout';
import Search from './Search';

const SearchPage: FC = () => {
	const [searchText, setSearchText] = useState<string>('');
	const { products, setFoundProducts } = useAppContext();

	const searchHandler = useCallback(
		(text: string) => {
			const foundProducts = products.filter((product) => product.title.toLowerCase().includes(text.trim()));

			setFoundProducts(foundProducts);
			setSearchText(text);
		},
		[products]
	);

	return (
		<HomeLayout>
			<Search value={searchText} onChangeText={searchHandler} style={styles.search} />
		</HomeLayout>
	);
};

const styles = StyleSheet.create({
	search: {
		marginTop: 20,
	},
});

export default SearchPage;
