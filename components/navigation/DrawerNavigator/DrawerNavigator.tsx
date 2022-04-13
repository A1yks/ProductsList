import { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from '../TabNavigator';
import AboutDev from '../../AboutDev';
import Results from '../../Results';
import Header from '../../Header';
import { DrawerScreens } from './types';

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
	return (
		<Drawer.Navigator initialRouteName={DrawerScreens.MAIN} screenOptions={{ header: (props) => <Header {...props} /> }}>
			<Drawer.Screen name={DrawerScreens.MAIN} component={TabNavigator} />
			<Drawer.Screen name={DrawerScreens.ABOUT_DEV} component={AboutDev} />
			<Drawer.Screen name={DrawerScreens.RESULTS} component={Results} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
