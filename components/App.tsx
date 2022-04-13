import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { StatusBar } from 'react-native';
import { AppContextProvider } from '../context/AppContext';
import { registerRootComponent } from 'expo';
import DrawerNavigator from './navigation/DrawerNavigator';

const App: FC = () => {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />
			<AppContextProvider>
				<DrawerNavigator />
			</AppContextProvider>
		</NavigationContainer>
	);
};

registerRootComponent(App);
