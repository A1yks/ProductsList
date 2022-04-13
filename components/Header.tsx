import { DrawerHeaderProps } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import icon from '../utils/icon';
import { DrawerScreens } from './navigation/DrawerNavigator/types';
import { TabScreens } from './navigation/TabNavigator/types';

const storeTitle = 'Jewelery & Electronics store';
const tabScreensValues = Object.values(TabScreens);

const MenuIcon = icon('menu-outline');

const Header: FC<DrawerHeaderProps> = (props) => {
	const { navigation, route } = props;
	const [headerTitle, setHeaderTitle] = useState<string>(storeTitle);

	function getHeaderTitle() {
		let childRouteName = getFocusedRouteNameFromRoute(route);

		if (route.name === DrawerScreens.MAIN && childRouteName === undefined) {
			childRouteName = TabScreens.HOME;
		}

		if (childRouteName !== undefined && tabScreensValues.includes(childRouteName as TabScreens)) {
			switch (childRouteName) {
				case TabScreens.HOME:
				case TabScreens.EXPLORE:
					return storeTitle;
			}

			return childRouteName;
		}

		return route.name;
	}

	useEffect(() => {
		setHeaderTitle(getHeaderTitle());
	}, [getHeaderTitle]);

	return (
		<View style={styles.container}>
			<View style={styles.menu}>
				<TouchableWithoutFeedback onPress={navigation.toggleDrawer}>
					<MenuIcon color="#000" size={32} />
				</TouchableWithoutFeedback>
			</View>
			<Text style={styles.text}>{headerTitle}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#e6e8eb',
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#36434e',
		alignSelf: 'center',
	},
	menu: {
		position: 'absolute',
		left: 20,
	},
});

export default Header;
