import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import plants from '../../data/plants';
import { ph, pw } from '../../constants/Dimensions';
import { Image } from 'expo-image';

export default function TabOneScreen() {
	const [data, setData] = useState(plants);

	const LeftContent = (props: any) => (
		<Avatar.Icon
			{...props}
			icon="flower"
			theme={{ colors: { primary: 'green' } }}
		/>
	);

	return (
		<Animated.View style={styles.container} entering={FadeIn.duration(1000)}>
			<FlatList
				data={data}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingVertical: ph(2) }}
				ItemSeparatorComponent={() => (
					<View style={{ marginVertical: ph(1) }} />
				)}
				renderItem={({ item: p }) => (
					<Card style={styles.card}>
						<Card.Title
							title={p.name}
							subtitle={p.species}
							left={LeftContent}
						/>
						{/* <Card.Cover style={styles.cover} source={{ uri: p.image }} /> */}
						<Image
							source={{ uri: p.image }}
							style={{ width: '100%', height: ph(30) }}
						/>
						<Card.Content>
							<Text variant="bodyMedium">{p.description}</Text>
						</Card.Content>
						<Card.Actions>
							<Button
								icon="details"
								buttonColor="green"
								textColor="white"
								style={{ borderWidth: 0 }}
							>
								Details
							</Button>
						</Card.Actions>
					</Card>
				)}
				keyExtractor={(item) => item.name}
			/>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		borderRadius: 10,
		marginHorizontal: pw(5),
	},
	cover: {
		borderRadius: 0,
	},
});
