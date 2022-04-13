import { FC } from 'react';
import HomeLayout from '../../HomeLayout';
import ProfilePage from '../../ProfilePage';
import SearchPage from '../../SearchPage';
import icon from '../../../utils/icon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { TabScreens } from './types';

const Tab = createBottomTabNavigator();

const TabNavigator: FC = () => {
	return (
		<Tab.Navigator
			initialRouteName={TabScreens.HOME}
			screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar, tabBarItemStyle: styles.tabBarItem }}
		>
			<Tab.Screen name={TabScreens.HOME} component={HomeLayout} options={{ tabBarIcon: icon('home-outline') }} />
			<Tab.Screen name={TabScreens.EXPLORE} component={SearchPage} options={{ tabBarIcon: icon('search-outline') }} />
			<Tab.Screen name={TabScreens.PROFILE} component={ProfilePage} options={{ tabBarIcon: icon('person-outline') }} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	tabBar: {
		height: 60,
	},
	tabBarItem: {
		padding: 8,
	},
});

export default TabNavigator;
