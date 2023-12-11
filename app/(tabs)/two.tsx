import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Avatar, Card, IconButton, List } from 'react-native-paper';
import { useState } from 'react';
import gardeners from '../../data/gardeners';
import { FlatList } from 'react-native-gesture-handler';
import { ph } from '../../constants/Dimensions';
import { Image } from 'expo-image';

export default function TabTwoScreen() {
	const [data, setData] = useState(gardeners);

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingVertical: ph(2) }}
				ItemSeparatorComponent={() => (
					<View style={{ marginVertical: ph(1) }} />
				)}
				renderItem={({ item: user }) => <User user={user} />}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
}

const User = ({ user }: { user: (typeof gardeners)[0] }) => {
	return (
		<>
			<Card.Title
				subtitleStyle={{ color: 'grey' }}
				title={user.name}
				subtitle={`hourly rate: ${user.hourlyRate} PKR`}
				left={(props) => (
					<Image source={{ uri: user.image }} style={styles.userImage} />
				)}
				right={(props) => (
					<IconButton {...props} icon="chevron-down" onPress={() => {}} />
				)}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	userImage: {
		width: '120%',
		height: '120%',
		borderRadius: 100,
	},
});
