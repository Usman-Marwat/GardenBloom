import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import useAuth from '../../auth/useAuth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
	color: string;
	size?: number;
}) {
	return (
		<MaterialCommunityIcons
			size={props.size || 28}
			style={{ marginBottom: -3 }}
			{...props}
		/>
	);
}

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const { setUser } = useAuth();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerLeft: () => (
					<Image
						source={require('../../assets/images/icon.png')}
						style={{ width: '40%', height: '100%' }}
					/>
				),
				headerRight: () => (
					<Link href="/modal" asChild>
						<Pressable onPress={() => setUser({ type: 'login' })}>
							{({ pressed }) => (
								<MaterialCommunityIcons
									name="logout"
									size={25}
									color={Colors[colorScheme ?? 'light'].text}
									style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
								/>
							)}
						</Pressable>
					</Link>
				),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Plants',
					tabBarIcon: ({ color }) => <TabBarIcon name="leaf" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: 'Gardners',
					tabBarIcon: ({ color }) => <TabBarIcon name="tree" color={color} />,
				}}
			/>
		</Tabs>
	);
}
