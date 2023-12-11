import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {
	Button,
	Card,
	Dialog,
	IconButton,
	Portal,
	Text,
} from 'react-native-paper';

import { View } from '../../components/Themed';
import gardeners from '../../data/gardeners';
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
	const [visible, setVisible] = useState(false);
	const showDialog = () => setVisible(true);
	const hideDialog = () => setVisible(false);

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
					<IconButton
						onPressIn={showDialog}
						{...props}
						icon="chevron-down"
						onPress={() => {}}
					/>
				)}
			/>

			<Portal>
				<Dialog
					visible={visible}
					onDismiss={hideDialog}
					style={{ backgroundColor: '#F8F8F8', gap: 20 }}
				>
					<View
						style={[
							styles.dialogBox,
							{
								alignItems: 'center',
								borderBottomWidth: 1,
								borderColor: 'lightgrey',
							},
						]}
					>
						<Dialog.Title>{user.name}</Dialog.Title>
						<Text variant="bodyLarge">{`(${user.hourlyRate} PKR)`}</Text>
					</View>

					<Dialog.Content style={{ gap: 15 }}>
						<View style={styles.dialogBox}>
							<Text variant="bodyMedium" style={styles.dialogTitle}>
								Contact:
							</Text>
							<Text variant="bodyMedium">{`${user.contact}`}</Text>
						</View>

						<View style={styles.dialogBox}>
							<Text variant="bodyMedium" style={styles.dialogTitle}>
								Address:
							</Text>
							<Text
								style={{ flexShrink: 1 }}
								variant="bodyMedium"
							>{`${user.address}`}</Text>
						</View>

						<View style={styles.dialogBox}>
							<Text variant="bodyMedium" style={styles.dialogTitle}>
								Rating:
							</Text>
							<Text variant="bodyMedium">{`   ${user.rating}/5`}</Text>
						</View>
					</Dialog.Content>
					<Dialog.Actions>
						<Button buttonColor="green" textColor="white" onPress={hideDialog}>
							Done
						</Button>
					</Dialog.Actions>
				</Dialog>
			</Portal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	dialogBox: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 10,
		backgroundColor: '#F8F8F8',
	},
	dialogTitle: {
		fontSize: 15,
		fontWeight: 'bold',
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
