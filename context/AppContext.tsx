import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { API_URL } from '@env';

export enum Categories {
	JEWELERY = 'Jewelery',
	ELECTRONICS = 'Electronics',
}

export interface ProductInfo {
	image: string;
	title: string;
	description: string;
	price: number;
}

export interface Product extends ProductInfo {
	id: number;
}

interface IAppContext {
	selectedCategory: Categories;
	products: Product[];
	foundProducts: Product[];
	productsLoading: boolean;
	selectCategory: React.Dispatch<React.SetStateAction<Categories>>;
	setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
	setFoundProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export function useAppContext() {
	const context = useContext(AppContext);

	if (context === undefined) {
		throw new Error('useAppContext must be used within AppContextProvider');
	}

	return context;
}

export const AppContextProvider: FC = (props) => {
	const [selectedCategory, selectCategory] = useState<Categories>(Categories.JEWELERY);
	const [products, setProducts] = useState<Product[]>([]);
	const [foundProducts, setFoundProducts] = useState<Product[]>([]);
	const [productsLoading, setProductsLoading] = useState<boolean>(false);

	useEffect(() => {
		setFoundProducts(products);
	}, [products]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				setProductsLoading(true);

				const response = await fetch(`${API_URL}/products/category/${selectedCategory.toLowerCase()}`);
				const data: Product[] = await response.json();

				setProducts(data);
			} catch (err) {
				Alert.alert('Error', 'No internet connection');
				setProducts([]);
			} finally {
				setProductsLoading(false);
			}
		}

		fetchProducts();
	}, [selectedCategory]);

	return (
		<AppContext.Provider value={{ selectedCategory, products, foundProducts, productsLoading, selectCategory, setProducts, setFoundProducts }}>
			{props.children}
		</AppContext.Provider>
	);
};
