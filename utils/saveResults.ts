import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';

export type Result = {
	date: string;
	searchQuery: string;
	resultsCount: number;
};

const fileName = 'results.json';
export const saveResultsPath = `${FileSystem.documentDirectory}/${fileName}`;

async function saveResults(contents: Result) {
	try {
		const fileInfo = await FileSystem.getInfoAsync(saveResultsPath);
		let data: Result[];

		if (fileInfo.exists) {
			const fileContents = await FileSystem.readAsStringAsync(saveResultsPath);

			data = [...JSON.parse(fileContents), contents];
		} else {
			data = [contents];
		}

		await FileSystem.writeAsStringAsync(saveResultsPath, JSON.stringify(data));
	} catch (err) {
		Alert.alert('Error', 'Search result saving error');
	}
}

export default saveResults;
