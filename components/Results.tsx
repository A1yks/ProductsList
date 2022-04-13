import { FC, useEffect, useState } from 'react';
import { Alert, StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import { Result, saveResultsPath } from '../utils/saveResults';
import { useIsFocused } from '@react-navigation/native';

const Results: FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [results, setResults] = useState<Result[]>([]);
	const isFocused = useIsFocused();

	useEffect(() => {
		async function readFile() {
			try {
				setLoading(true);

				const fileInfo = await FileSystem.getInfoAsync(saveResultsPath);

				if (fileInfo.exists) {
					const result = await FileSystem.readAsStringAsync(saveResultsPath);

					setResults(JSON.parse(result));
				}
			} catch (err) {
				Alert.alert('Error', 'File read error');
			} finally {
				setLoading(false);
			}
		}

		if (isFocused) readFile();
	}, [isFocused]);

	if (loading)
		return (
			<View style={[styles.container, styles.centerContent]}>
				<ActivityIndicator color="#3080ed" size="large" />
			</View>
		);

	if (results.length === 0)
		return (
			<View style={[styles.container, styles.centerContent]}>
				<Text style={styles.noResultsText}>No results</Text>
			</View>
		);

	return (
		<View style={styles.container}>
			<DataTable>
				<DataTable.Header>
					<DataTable.Title textStyle={styles.tableText} style={styles.tableCell}>
						Date
					</DataTable.Title>
					<DataTable.Title textStyle={styles.tableText} style={styles.tableCell}>
						Search query
					</DataTable.Title>
					<DataTable.Title textStyle={styles.tableText} style={styles.tableCell}>
						Results count
					</DataTable.Title>
				</DataTable.Header>

				{results.map(({ date, searchQuery, resultsCount }, i) => (
					<DataTable.Row key={i} style={styles.tableRow}>
						<View style={[styles.tableCell, styles.padding]}>
							<Text style={styles.tableText}>{date}</Text>
						</View>
						<View style={[styles.tableCell, styles.padding]}>
							<Text style={styles.tableText}>{searchQuery}</Text>
						</View>
						<View style={[styles.tableCell, styles.padding]}>
							<Text style={styles.tableText}>{resultsCount}</Text>
						</View>
					</DataTable.Row>
				))}
			</DataTable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
	},
	tableRow: {
		flexDirection: 'row',
	},
	tableText: {
		fontSize: 18,
		textAlign: 'center',
	},
	tableCell: {
		flexDirection: 'row',
		justifyContent: 'center',
		flex: 1,
	},
	padding: {
		paddingVertical: 8,
	},
	centerContent: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	noResultsText: {
		fontSize: 24,
	},
});

export default Results;
