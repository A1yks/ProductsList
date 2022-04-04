import { createContext, FC, useContext, useState } from 'react';

export enum Categories {
	JEWELERY = 'Jewelery',
	ELECTRONICS = 'Electronics',
}

interface IAppContext {
	selectedCategory: Categories;
	selectCategory: React.Dispatch<React.SetStateAction<Categories>>;
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

	return <AppContext.Provider value={{ selectedCategory, selectCategory }}>{props.children}</AppContext.Provider>;
};
