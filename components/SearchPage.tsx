import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';
import saveResults from '../utils/saveResults';
import HomeLayout from './HomeLayout';
import Search from './Search';
import { format } from 'date-fns';

const debounceTimeout = 500;

const SearchPage: FC = () => {
	const [searchText, setSearchText] = useState<string>('');
	const { products, setFoundProducts, selectedCategory } = useAppContext();
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const saveDataWithDelay = useCallback((searchText: string, resultsCount: number) => {
		if (timerRef.current !== null) {
			clearTimeout(timerRef.current);
		}

		timerRef.current = setTimeout(() => {
			saveResults({ searchQuery: searchText, resultsCount, date: format(new Date(), 'dd.MM.yyyy HH:mm:ss') });
		}, debounceTimeout);
	}, []);

	const searchHandler = useCallback(
		(text: string) => {
			const foundProducts = products.filter((product) => product.title.toLowerCase().includes(text.trim().toLowerCase()));

			if (text.trim() !== '') {
				saveDataWithDelay(text, foundProducts.length);
			}

			setFoundProducts(foundProducts);
			setSearchText(text);
		},
		[products]
	);

	useEffect(() => {
		setSearchText('');
	}, [selectedCategory]);

	return (
		<HomeLayout>
			<Search value={searchText} onChangeText={searchHandler} style={styles.search} placeholder="Enter product name" />
		</HomeLayout>
	);
};

const styles = StyleSheet.create({
	search: {
		marginTop: 20,
	},
});

export default SearchPage;
