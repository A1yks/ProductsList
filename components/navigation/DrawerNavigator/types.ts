import { ParamListBase, RouteProp } from '@react-navigation/native';

export type ScreenOptionsProps = {
	route: RouteProp<ParamListBase, string>;
	navigation: any;
};

export enum DrawerScreens {
	MAIN = 'Main',
	ABOUT_DEV = 'About developer',
	RESULTS = 'Results',
}
