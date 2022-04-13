import Ionicon from 'react-native-vector-icons/Ionicons';

type IconProps = {
	color: string;
	size: number;
	focused?: boolean;
};

function icon(iconName: string) {
	return (props: IconProps) => <Ionicon name={iconName} {...props} />;
}

export default icon;
