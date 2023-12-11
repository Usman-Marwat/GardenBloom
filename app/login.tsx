import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Text } from '../components/Themed';
import { pf, ph, pw } from '../constants/Dimensions';
import useAuth from '../auth/useAuth';
import { Button, TextInput } from 'react-native-paper';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';

export default function Login() {
	const [text, setText] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState('');
	const { setUser } = useAuth();

	const handleLogin = () => {
		if (!text || !password) return setError('Please enter email and password');

		setUser({ name: 'Usman' });
	};

	return (
		<Animated.View style={{ flex: 1 }} entering={FadeInDown.duration(1000)}>
			<KeyboardAwareScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.container}
			>
				<Image
					style={styles.logo}
					source={require('../assets/images/icon.png')}
				/>
				{error && (
					<Animated.Text
						entering={FadeIn.duration(300)}
						exiting={FadeOut.duration(500)}
						style={styles.errorText}
					>
						{error}
					</Animated.Text>
				)}
				<TextInput
					mode="flat"
					label="Email"
					value={text}
					onChangeText={(text) => {
						if (error) setError('');
						setText(text);
					}}
					style={{ marginTop: 30 }}
					activeUnderlineColor="#303030"
					contentStyle={{ backgroundColor: '#F8F8F8' }}
					autoCapitalize="none"
					keyboardType="email-address"
				/>
				<TextInput
					mode="flat"
					label="Password"
					value={password}
					secureTextEntry
					onChangeText={(text) => {
						if (error) setError('');
						setPassword(text);
					}}
					style={{ marginTop: 20 }}
					activeUnderlineColor="#303030"
					contentStyle={{ backgroundColor: '#F8F8F8' }}
					autoCapitalize="none"
					keyboardType="visible-password"
				/>
				<Button
					icon="login"
					mode="contained"
					onPress={handleLogin}
					buttonColor="green"
					style={{ marginTop: 30 }}
				>
					LOG IN
				</Button>
			</KeyboardAwareScrollView>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: pw(5),
	},
	errorText: {
		color: 'red',
		textAlign: 'center',
		fontSize: pf(2.3),
	},
	logo: {
		width: pw(90),
		height: ph(35),
		alignSelf: 'center',
		marginTop: ph(10),
		borderRadius: 7,
		resizeMode: 'contain',
	},
});
