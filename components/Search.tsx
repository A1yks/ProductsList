import { FC } from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';

type Props = {
	value: string;
	onChangeText: (text: string) => void;
	style?: ViewStyle;
	placeholder?: string;
};

const Search: FC<Props> = (props) => {
	return (
		<View style={[styles.container, props.style]}>
			<TextInput style={styles.input} value={props.value} onChangeText={props.onChangeText} placeholder={props.placeholder} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		marginLeft: 20,
		marginRight: 20,
		borderWidth: 1,
		borderColor: '#9fa5ab',
		borderRadius: 6,
	},
	input: {
		paddingHorizontal: 10,
		paddingVertical: 4,
		alignSelf: 'stretch',
		fontSize: 14,
	},
});

export default Search;
