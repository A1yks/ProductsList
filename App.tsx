import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import { StatusBar } from 'react-native';
import Header from './components/Header';
import HomeLayout from './components/HomeLayout';
import ProfilePage from './components/ProfilePage';
import SearchPage from './components/SearchPage';
import { AppContextProvider } from './context/AppContext';
import icon from './utils/icon';

const Tab = createBottomTabNavigator();

export enum Screens {
	HOME = 'Home',
	EXPLORE = 'Explore',
	PROFILE = 'Profile',
}

const App: FC = () => {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />
			<Header />

			<AppContextProvider>
				<Tab.Navigator
					initialRouteName={Screens.HOME}
					screenOptions={{ headerShown: false }}
					sceneContainerStyle={{ backgroundColor: '#fff' }}
				>
					<Tab.Screen name={Screens.HOME} component={HomeLayout} options={{ tabBarIcon: icon('home-outline') }} />
					<Tab.Screen name={Screens.EXPLORE} component={SearchPage} options={{ tabBarIcon: icon('search-outline') }} />
					<Tab.Screen name={Screens.PROFILE} component={ProfilePage} options={{ tabBarIcon: icon('person-outline') }} />
				</Tab.Navigator>
			</AppContextProvider>
		</NavigationContainer>
	);
};

export default App;
